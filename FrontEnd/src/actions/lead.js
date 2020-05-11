import axios from 'axios';
import {createMessage} from "./message";


import {GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS} from "./type";

// GET_LEADS
export const getLeads = () => dispatch => {
    axios
        .get('/API/leads')
        .then((res) => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })

        .catch((err) => console.log(err.response.data));

};

// DELETE_LEADS

export const deleteLead = (id) => dispatch => {
    axios
        .delete(`/API/leads/${id}/`)
        .then((res) => {
            dispatch(createMessage({deleteLead: 'lead Deleted'}));
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })


};


// ADD LEAD
export const addLead = (lead) => (dispatch) => {
    axios
        .post('/API/leads/', lead)
        .then((res) => {
            dispatch(createMessage({addLead: 'lead Added'}));

            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            });
        })
        .catch((err) => {
            const errors = {
                msg: err.response.data,
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })

        });


};