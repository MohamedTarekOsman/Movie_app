import { createStore } from "redux";
import movieReucer from '../reducer/movieReducer'

export const store=createStore(movieReucer)