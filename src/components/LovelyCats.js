import React, { Fragment } from "react";
import { connect } from "react-redux";
import {setLovelyCats} from "../redux/actions.js";
import { Cat } from "./Cat.js";

 function LovelyCats_({lovelyCats}){
 
    return (
        <div className="cats">
            {lovelyCats.length===0?null:lovelyCats.map(cat=> 
            <Fragment key={cat.id}>
                <Cat cat={cat} setLovelyCats={setLovelyCats} lovelyCats={lovelyCats}/>
            </Fragment>
            )}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        lovelyCats: state.lovelyCats,
    };
  };
const mapDispatchToProps = {
    setLovelyCats
}
export const LovelyCats = connect(mapStateToProps,mapDispatchToProps)(LovelyCats_);