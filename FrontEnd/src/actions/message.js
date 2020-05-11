import {CREATE_MESSAGE} from "./type";


// CREATE  MESSAGE
export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg,
    };
};


