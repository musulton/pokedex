import {fetchData} from "@/services/api";

describe("API services", () => {
    const originalFetch = global.fetch

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    count: 100,
                    results: [{
                        name: "Pokemon",
                        url: "http://gugel.com"
                    }]
                }),
            }))
            .mockImplementationOnce(() => {
                return Promise.resolve({
                    json: () => Promise.resolve({
                        name: "Pokemon",
                        imageSrc: "http://gugle.com",
                        id: 1
                    })
                })
            })
    })

    afterEach(() => {
        global.fetch = originalFetch
    })

    it("should fetch and set data correctly", async () => {
        const mockSetData = jest.fn();
        await fetchData(1, mockSetData)

        expect(global.fetch).toHaveBeenCalledTimes(2)
        expect(mockSetData).toHaveBeenCalledWith({
            count: expect.any(Number),
            pokemon: expect.any(Array)
        })
    })
})
