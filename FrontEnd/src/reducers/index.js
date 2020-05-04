import {combineReducers} from "redux";

import leads from './lead';
import errors from "./errors";


export default combineReducers({
    leads,
    errors
});