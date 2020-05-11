import {combineReducers} from "redux";

import leads from './lead';
import errors from "./errors";
import message from "./message";


export default combineReducers({
    leads,
    errors,
    message
});