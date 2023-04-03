import {fetchData} from "./api";

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

    it("should fetch and return data correctly", async () => {
        const params: { page: string } = {
            page: "2"
        }
        const result = await fetchData(params)

        expect(global.fetch).toHaveBeenCalledTimes(2)
        expect(result).toEqual({
            count: expect.any(Number),
            pokemon: expect.any(Array)
        })
    })
})
