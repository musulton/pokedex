import {capitalize, getRandomColor, padWithLeadingZeros} from "@/utils/common";
import {colors} from "@/pages/pokemon/styled";

describe("Common utils", () => {
    it("getRandomColor - should return color from colors array", () => {
        const actualResult = getRandomColor();
        expect(colors.includes(actualResult)).toBeTruthy()
    })

    it("capitalize - should be uppercase on the first character", () => {
        const dummyText = "muhammad"
        const actualResult = capitalize(dummyText)
        const expected = "Muhammad"

        expect(actualResult).toEqual(expected)
    })

    it("padWithLeadingZeros - should return pad number with leading zeros", () => {
        const dummyNumber = 10
        const actualResult = padWithLeadingZeros(dummyNumber, 5)
        const expected = "00010"

        expect(actualResult).toEqual(expected)
    })
})
