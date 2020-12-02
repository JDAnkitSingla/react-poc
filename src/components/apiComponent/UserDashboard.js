import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import AddUser from './AddUser';
import UserList from './UserList';
import SearchUser from './SearchUser';

class UserDashboard extends Component {

    state = {
        users : [],
        error : true,
        fetchTime : '',
        showAddUser : false
    };

    /**
     * Make a call to fetch users list after component is ready
     */
    componentDidMount() {
        this.fetchUsers();
    }


    /**
     * Method to fetch users list from a public api
     */
    fetchUsers = () => {
        //https://gorest.co.in/
        fetch('https://gorest.co.in/public-api/users')
        .then(response => response.json())
        .then(result => {

            if(result.code !== 200) {
                this.setState(prev => ({
                    error : true,
                    users : [],
                    fetchTime : new Date()
                }));
            } else {
                this.setState(prev => ({
                    error : false,
                    users : result.data,
                    fetchTime : new Date()
                }));
            }
        });
    }

    /**
     * Method to remove user from the list
     */
    removeUser = () => {

    }

    /**
     * 
     *  @param user 
     * `user {
     *      name, 
     *      email, 
     *      gender, . . . 
     *  }` 
     */
    addUser = (user) => {
        // post call
        console.log('make put call for user')
        console.log(user)
    }

    onSearch = (searchText) => {
        console.log(searchText)
    }


    render() {
        const error= this.state.error;
        const showAddUser = this.state.showAddUser;

        return(
            <div>
                <h2 className="card-header">User Dashboard</h2>
                <div className="card-body btn-group">
                    
                    <Button variant="primary" onClick={() => {this.setState({showAddUser : true})}}>Add User</Button> {' '}
                    <Button variant="secondary" onClick={this.fetchUsers}>Refresh</Button>
                   
                </div>
                <div className="footer"> Last updated at : &nbsp;
                    <Moment date={this.state.fetchTime} format="d MMM h:mm:ss A"/>
                </div>
                <AddUser key="addUsr" 
                    show={showAddUser}
                    addUser={this.addUser}
                    cancel={ () => {this.setState({showAddUser : false})} }
                />

                <SearchUser onSearch={this.onSearch}/>

                <UserList users={this.state.users} error={error} />
                
            </div>
        ) 
    }
}

export default UserDashboard;