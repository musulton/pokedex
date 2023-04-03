import {render} from "@testing-library/react";

import Loading from "../../src/components/Loading/Loading";

it("should render Loading correctly", () => {
    const {container} = render(<Loading />)

    expect(container.firstChild).toMatchSnapshot();
})
