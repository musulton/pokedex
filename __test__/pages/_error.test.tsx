import {render} from "@testing-library/react";

import Error from "../../src/pages/_error";

describe("Error page", () => {
    it("should render 404 error correctly", () => {
        const {container} = render(<Error statusCode={404} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should render internal server error correctly", () => {
        const {container} = render(<Error />)

        expect(container.firstChild).toMatchSnapshot();
    })
})
