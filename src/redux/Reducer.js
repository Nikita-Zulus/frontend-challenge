import { FETCHED_CATS, LOADER, NOT_LOVELY_ANYMORE, SET_LOVELY_CATS } from "./types";

const initialState = {
    allCats: [],
    lovelyCats: [],
    loader: false,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_CATS:
            return { ...state, allCats: [...state.allCats, ...action.payload] };

        case SET_LOVELY_CATS:
            return { ...state, lovelyCats: [...state.lovelyCats, action.payload]};

        case NOT_LOVELY_ANYMORE:
            return { ...state, lovelyCats: state.lovelyCats.filter(cat=>cat.id!==action.payload)};    

        case LOADER:
            return {
              ...state,
              loader: action.payload,
            };

        default:
            return state;
    }
}
