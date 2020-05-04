import axios from 'axios';


import {GET_LEADS, DELETE_LEAD, ADD_LEAD} from "./type";

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

              .catch((error) => console.log( error.response.request.response ) );

};

// DELETE_LEADS

export const deleteLead = (id) => dispatch => {
    axios
        .delete(`/API/leads/${id}/`)
        .then((res) => {
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })


};

//ADD LEAD

// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post('/API/leads/', lead)
    .then((res) => {

      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
      .catch((error) => console.log( error.response.request.response ) );



};