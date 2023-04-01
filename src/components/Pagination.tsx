interface Props {
    currentPage: number
    totalCount: number
    onChangePage: (number) => void
    pageSize: number
}

const Pagination = ({
    currentPage,
    totalCount,
    onChangePage,
    pageSize
}: Props): JSX.Element => {
    const lastPage: number = Math.ceil(totalCount / pageSize)

    const previousPage = (): void => {
        if (currentPage !== 1) {
            const toPage = currentPage - 1
            onChangePage(toPage)
        }
    };

    const nextPage = (): void => {
        if (currentPage !== lastPage) {
            const toPage = currentPage + 1
            onChangePage(toPage)
        }
    };

    return (
        <div>
            <button onClick={previousPage} disabled={currentPage === 1}>
                Previous
            </button>
            &nbsp;
            <button onClick={nextPage} disabled={currentPage === lastPage}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
