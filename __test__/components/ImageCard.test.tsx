import {fireEvent, render, screen} from "@testing-library/react";

import ImageCard from "../../src/components/ImageCard/ImageCard";

const mockPush = jest.fn()
jest
    .mock('next/router', () => ({
        useRouter() {
            return ({
                push: mockPush,
            });
        },
    }))
    .mock("../../src/utils/common", () => ({
        ...jest.requireActual("../../src/utils/common"),
        getRandomColor: jest.fn().mockImplementation(() => "white")
    }))

describe("ImageCard", () => {
    const imageItemProps = {
        id: 1,
        imageSrc: "https://avatars.githubusercontent.com/u/45544958?v=4",
        name: "plankton"
    }

    it("should render ImageCard correctly", () => {
        const {container} = render(<ImageCard imageItem={imageItemProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should navigate to detail page when image is clicked", () => {
        render(<ImageCard imageItem={imageItemProps} />)
        fireEvent.click(screen.getByText("Plankton"))

        expect(mockPush).toHaveBeenCalledWith(`/pokemon/plankton`)
    })
})
