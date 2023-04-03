import styles from "./Pagination.module.css";
import {useMemo} from "react";

interface Props {
    currentPage: number
    totalCount: number
    onChangePage: (page: number) => void
    pageSize: number
    onChangeMaxPageLimit: (page: number) => void
    onChangeMinPageLimit: (page: number) => void
    maxPageLimit: number
    minPageLimit: number
    pageNumberLimit: number
}

const Pagination = ({
    currentPage,
    totalCount,
    onChangePage,
    pageSize,
    pageNumberLimit,
    onChangeMaxPageLimit,
    onChangeMinPageLimit,
    maxPageLimit,
    minPageLimit
}: Props): JSX.Element => {
    const lastPage: number = Math.ceil(totalCount / pageSize)
    const pages = useMemo(() => {
        const _pages = []
        for (let i = 1; i <= lastPage; i++) {
            _pages.push(i)
        }

        return _pages
    }, [lastPage]);

    const previousPage = (): void => {
        if (currentPage !== 1) {
            const toPage = currentPage - 1

            if (toPage % pageNumberLimit === 0) {
                onChangeMaxPageLimit(maxPageLimit - pageNumberLimit)
                onChangeMinPageLimit(minPageLimit - pageNumberLimit)
            }

            onChangePage(toPage)
        }
    };

    const nextPage = (): void => {
        if (currentPage !== lastPage) {
            const toPage = currentPage + 1

            if (toPage > maxPageLimit) {
                onChangeMaxPageLimit(maxPageLimit + pageNumberLimit)
                onChangeMinPageLimit(minPageLimit + pageNumberLimit)
            }

            onChangePage(toPage)
        }
    };

    const onPageNumberClick = (e: any) => {
        onChangePage(Number(e.target.id))
    }

    return (
        <div className={styles.paginationWrapper}>
            <button className={styles.paginationButton} onClick={previousPage} disabled={currentPage === 1}>
                &#8249; Previous
            </button>
            <div className={styles.pageNumberWrapper}>
                {minPageLimit >= 1 && (
                    <button
                        className={styles.dots}
                        disabled={true}
                    >
                        &hellip;
                    </button>
                )}
                {pages.map(page => {
                    if (page <= maxPageLimit && page > minPageLimit) {
                        return (
                            <button
                                className={styles.pageNumberButton}
                                key={page}
                                id={String(page)}
                                disabled={page === currentPage}
                                onClick={onPageNumberClick}
                            >
                                {page}
                            </button>
                        )
                    }
                })}
                {pages.length > maxPageLimit && (
                    <button
                        className={styles.dots}
                        disabled={true}
                    >
                        &hellip;
                    </button>
                )}
            </div>
            <button className={styles.paginationButton} onClick={nextPage} disabled={currentPage === lastPage}>
                Next &#8250;
            </button>
        </div>
    );
};

export default Pagination;
