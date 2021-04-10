import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {fetchCats} from "../redux/actions.js"

function Navbar_(props) { 
    let currpath = props.location.pathname;
    const fetchCats = props.fetchCats;
    useEffect(() => {
        fetchCats();
        // eslint-disable-next-line
      }, []);
    return ( 
        <nav className="navbar">
            <div className="navbar__item">
                <NavLink className={`navbar__link ${currpath==="/"?"activelink":""}`} to="/">
                    Все котики
                </NavLink>
            </div>
            <div className="navbar__item">
                <NavLink className={`navbar__link ${currpath==="/levelycats"?"activelink":""}`} to="/levelycats">
                    Любимые котики
                </NavLink>
            </div>
        </nav>
    )
}

const mapDispatchToProps = {
    fetchCats
}

export const Navbar = withRouter(
    connect(null, mapDispatchToProps)(Navbar_)
);