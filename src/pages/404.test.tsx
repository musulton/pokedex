import {render} from "@testing-library/react";

import NotFound from "@/pages/404";

it("should render NotFound correctly", () => {
    const {container} = render(<NotFound />)

    expect(container).toMatchSnapshot();
})
