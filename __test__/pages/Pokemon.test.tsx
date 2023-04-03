import {render} from "@testing-library/react";

import Pokemon from "../../src/pages/pokemon";
import React, {useState} from "react";

jest
    .mock("../../src/components/ImageCard", () => "ImageCard")
    .mock("../../src/services/api", () => ({
        fetchData: jest.fn()
    }))
    .mock("../../src/utils/common", () => ({
        ...jest.requireActual("../../src/utils/common"),
        getRandomColor: jest.fn().mockImplementation(() => "white")
    }))
    .mock('react', () => ({
        ...jest.requireActual('react'),
        useState: jest.fn(),
    }))

describe("Pokemon pages", () => {
    const mockState = {
        count: 100,
        pokemon: [{
            id: 1,
            name: "Pokemon",
            imageSrc: "http://gugel.com"
        }]
    }

    beforeEach(() => {
        useState.mockImplementation(() => [mockState, jest.fn()])
    })

    it("should render Pokemon correctly", () => {
        const {container} = render(<Pokemon />)

        expect(container.firstChild).toMatchSnapshot();
    })
})
