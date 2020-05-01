import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getLeads} from "../../actions/lead";

export class Leads extends React.Component {

    static propTypes = {

       leads: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <h1>Leads list</h1>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps)(Leads);