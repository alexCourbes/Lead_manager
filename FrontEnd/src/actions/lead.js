import axios from 'axios';


import {GET_LEADS, DELETE_LEADS, ADD_LEAD} from "./type";

// GET_LEADS
export const getLeads = () =>  dispatch =>{
    axios.get('/API/leads')
        .then(res =>{
            dispatch ({
               type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// DELETE_LEADS

export const deleteLead = id =>  dispatch =>{
    axios
        .delete(`/API/leads/${id}/`)
        .then(res =>{
            dispatch ({
               type: DELETE_LEADS,
                payload: id
            });
        }).catch(err => console.log(err));
}

//ADD LEAD

export const addLead = (lead) =>  dispatch =>{
    axios.get('/API/leads',lead)
        .then(res =>{
            dispatch ({
               type: ADD_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}