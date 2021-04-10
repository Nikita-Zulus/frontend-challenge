import React, { Fragment } from "react";
import { connect } from "react-redux";
import {setLovelyCats} from "../redux/actions.js"
import { Cat } from "./Cat.js";

 function AllCats_({allCats,lovelyCats,setLovelyCats}){
 
    return (
        <div className="cats">
            {allCats.length===0?null:allCats.map(cat=> 
            <Fragment key={cat.id}>
               <Cat cat={cat} setLovelyCats={setLovelyCats} lovelyCats={lovelyCats}/>
            </Fragment>
            )}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        allCats: state.allCats,
        lovelyCats: state.lovelyCats,
    };
  };
const mapDispatchToProps = {
    setLovelyCats
}
export const AllCats = connect(mapStateToProps,mapDispatchToProps)(AllCats_);