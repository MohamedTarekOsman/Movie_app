import { ALLMOVIES } from "../types/moviesTypes";


const moviesReducer=(state={movies:[],pageCount:0},action)=>{
    switch(action.type)
    {
        case ALLMOVIES:
            return {movies: action.data}

        default:
            return state;
    }
}

export default moviesReducer