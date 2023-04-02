import {PaginationWrapper} from "@/components/Pagination/styles";
import styles from "./Pagination.module.css";

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
        <div className={styles.paginationWrapper}>
            <button className={styles.paginationButton} onClick={previousPage} disabled={currentPage === 1}>
                &#8249; Previous
            </button>
            &nbsp;
            <button className={styles.paginationButton} onClick={nextPage} disabled={currentPage === lastPage}>
                Next &#8250;
            </button>
        </div>
    );
};

export default Pagination;
