import React, {Component} from 'react';
import '../../css/user.css';
import {IoClose} from 'react-icons/io5';


class User extends Component {

    render() {
        return(
            <div className="card user mx-4 border-fuchsia d-inline-flex">
                <span className="col-1 align-self-end link"><IoClose /></span>
                
                <p className="row">
                    <label className="col-md-4 col-sm-4 col-12">Name:</label>
                    <span className="col-md-8 col-sm-8 col-12">{this.props.data.name} </span>
                </p>
                <p className="row ">
                    <label className="col-md-4 col-sm-4 col-12">Email:</label>
                    <span className="col-md-8 col-sm-8 col-12">{this.props.data.email} </span>
                </p>
                <p className="row">
                    <label className="col-md-4 col-sm-4 col-12">Gender:</label>
                    <span className="col-md-8 col-sm-8 col-12">{this.props.data.gender} </span>
                </p>
            </div>
        ) 
    }
}

export default User;