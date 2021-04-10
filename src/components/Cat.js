import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NOT_LOVELY_ANYMORE } from "../redux/types";
import skeletonHeart from "../images/skeletonheart.svg";
import hoveredHeart from "../images/hoveredheart.svg";
import clickedHeart from "../images/clickedheart.svg";

export function Cat({cat,setLovelyCats,lovelyCats}){
    const [catFocus,setCatFocus] = useState("");
    const [showHeart,setShowHeart] = useState("hidden");
    const [heart,setHeart] = useState(skeletonHeart);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(lovelyCats.map(x=>x.id).includes(cat.id)===true){
            setHeart(clickedHeart) 
            setShowHeart("visible")
        }
        // eslint-disable-next-line
    },[])
    
    function handleLovelyCats(){
        if(lovelyCats.map(x=>x.id).includes(cat.id)){
            setHeart(skeletonHeart)
            dispatch({type:NOT_LOVELY_ANYMORE,payload:cat.id})
        return;
        }
        setHeart(clickedHeart)
        setLovelyCats(cat)
    }
    function handleMouseOver(){
        setShowHeart("visible")
        setCatFocus("catfocus");
    
    }
    function handleMouseOut(){
        if(heart!==clickedHeart){ 
            setShowHeart("hidden")
        }    
        setCatFocus("");
       
    }
    function handleMouseHeartOver(){
        if(heart!==clickedHeart){ 
            setHeart(hoveredHeart)
        }

    }
    function handleMouseHeartOut(){
        if(heart!==clickedHeart){ 
            setHeart(skeletonHeart)
        }    
    }
    return(
        <div className={`cat ${catFocus}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={`${cat.url}`} className="catImg" alt="catPic" />
            <img 
            src={heart} 
            className="heart" 
            style={{visibility:`${showHeart}`}} 
            alt="heartPic" 
            onMouseOver={handleMouseHeartOver} 
            onMouseOut={handleMouseHeartOut}
            onClick={handleLovelyCats} 
            />
        </div>
    )
}