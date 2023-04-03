import {render, screen} from "@testing-library/react";
import {fireEvent} from "@testing-library/react";

import Pagination from "../../src/components/Pagination/Pagination";

describe("Pagination component", () => {
    it("should render Pagination correctly", () => {
        const mockProps = {
            currentPage: 1,
            totalCount: 10,
            onChangePage: jest.fn(),
            pageSize: 5
        }

        const {container} = render(<Pagination {...mockProps} />)

        expect(container.firstChild).toMatchSnapshot();
    })

    it("should call onChangePage with params when prev button is click and current page is not first page", () => {
        const mockOnChangePage = jest.fn()
        const mockProps = {
            currentPage: 2,
            totalCount: 10,
            onChangePage: mockOnChangePage,
            pageSize: 5
        }

        render(<Pagination {...mockProps} />)
        fireEvent.click(screen.getByText("‹ Previous"))

        expect(mockOnChangePage).toBeCalledWith(mockProps.currentPage - 1)
    })

    it("should not call onChangePage when prev button clicked and current page is first page", () => {
        const mockOnChangePage = jest.fn()
        const mockProps = {
            currentPage: 1,
            totalCount: 10,
            onChangePage: mockOnChangePage,
            pageSize: 5
        }

        render(<Pagination {...mockProps} />)
        fireEvent.click(screen.getByText("‹ Previous"))

        expect(mockOnChangePage).not.toBeCalled()
    })

    it("should call onChangePage with params when next button is click and current page is not last page", () => {
        const mockOnChangePage = jest.fn()
        const mockProps = {
            currentPage: 1,
            totalCount: 10,
            onChangePage: mockOnChangePage,
            pageSize: 5
        }

        render(<Pagination {...mockProps} />)
        fireEvent.click(screen.getByText("Next ›"))

        expect(mockOnChangePage).toBeCalledWith(mockProps.currentPage + 1)
    })

    it("should not call onChangePage with params when prev button is click and current page is last page", () => {
        const mockOnChangePage = jest.fn()
        const mockProps = {
            currentPage: 2,
            totalCount: 10,
            onChangePage: mockOnChangePage,
            pageSize: 5
        }

        render(<Pagination {...mockProps} />)
        fireEvent.click(screen.getByText("Next ›"))

        expect(mockOnChangePage).not.toBeCalled()
    })
})
