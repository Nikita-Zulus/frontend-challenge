import {SET_LOVELY_CATS, FETCHED_CATS, LOADER} from "./types.js"




const url = "https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng"

export function setLovelyCats(payload){
    return {
        type: SET_LOVELY_CATS,
        payload
    }
}

export function fetchCats() {
    return async (dispatch) => {
        try {
            dispatch({type:LOADER,payload:true})
            const response = await fetch(url,{
                headers: {
                    "x-api-key": "8f641cc5-d472-4930-a04a-501460dfce02",
                }
            }
            );
            const data = await response.json();
            const payload = data.map(x=>x={id:x.id,url:x.url,lovely:false});
            console.log(payload);
            dispatch({ type: FETCHED_CATS, payload });
            dispatch({type:LOADER,payload:false})
        } catch(e) {
            throw new Error(e.message);
        }    
    };
  }