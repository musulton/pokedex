import {render} from "@testing-library/react";

import Pokemon from "@/pages/pokemon/index";
import React, {useState} from "react";

jest
    .mock("../../components/ImageCard", () => "ImageCard")
    .mock("../../services/api", () => ({
        fetchData: jest.fn()
    }))
    .mock("../../utils/common", () => ({
        ...jest.requireActual("../../utils/common"),
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

        expect(container).toMatchSnapshot();
    })
})
