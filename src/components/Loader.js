import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export function Loader(){
    const loader = useSelector(state => state.loader);
    return (
        <Fragment>
            {loader&&
            <div className="loader">
                ... загружаем ещё котиков ...
            </div>
           }
        </Fragment>
    )
}