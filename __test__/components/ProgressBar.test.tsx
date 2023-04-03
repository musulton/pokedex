import {render} from "@testing-library/react";

import ProgressBar from "../../src/components/ProgressBar/ProgressBar";

describe("Progressbar component", () => {
    it("should render ProgressBar correctly with progress less than 40%", () => {
        const mockProps = {
            percentage: 39,
            label: "Test"
        }

        const {container} = render(<ProgressBar {...mockProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should render ProgressBar correctly with progress more than 40%", () => {
        const mockProps = {
            percentage: 59,
            label: "Test"
        }

        const {container} = render(<ProgressBar {...mockProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should render ProgressBar correctly with progress more than 60%", () => {
        const mockProps = {
            percentage: 79,
            label: "Test"
        }

        const {container} = render(<ProgressBar {...mockProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should render ProgressBar correctly with progress more than 80%", () => {
        const mockProps = {
            percentage: 90,
            label: "Test"
        }

        const {container} = render(<ProgressBar {...mockProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })
})
