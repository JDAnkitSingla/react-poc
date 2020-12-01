import React, {Component} from 'react';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css';

class UserList extends Component {

    render() {
        return(
            <div className="my-5">
                <h5 className="heading" >List of users : </h5>
                <div className="userlist">
                {
                    this.props.error ? 
                        'Could not fetch Users!' :
                        this.props.users.map((user, i) => 
                            user !== undefined ? <User key={i} data={user}></User> : ''
                        )
                }
                </div>
            </div>
        ) 
    }
}

export default UserList;