'use client';

import Router from "next/router";

const NotFound = (): JSX.Element => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => Router.reload()}>
                Reload
            </button>
        </div>
    );
}

export default NotFound
