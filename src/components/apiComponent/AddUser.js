import { Modal } from 'react-bootstrap';
import {Component} from 'react';

class AddUser extends Component {

    state = {
        ...this.props,
        username: "",
        email: "",
        gender: "",
        
    }

    update = (e, val) => {
       this.setState({
           [e.target.name] : val
        });          
    }
    
    save = () => {
        let user = {
            name: this.state.username,
            email: this.state.email,
            gender: this.state.gender,
            created: new Date()
        }
        this.state.addUser(user);
    }


    render() {
        console.log(this.props.show);
        return(
            <Modal id="userform" show={this.props.show}>
                <Modal.Header className="alert-secondary"> 
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="form-group">
                    <label className="form-text" >Name</label>
                    <input className="form-control" id="username" name="username" 
                        type="text"
                        onChange={e => this.update(e, e.target.value)}
                        />
                </div>

                <div className="form-group">
                    <label className="form-text">Email</label>
                    <input className="form-control" id="email" name="email" 
                        type="text"
                        onChange={e => this.update(e, e.target.value)}
                        />
                </div>

                <div className="form-group">
                    <label className="form-text" >Gender</label>
                    <select className="form-control" id="gender" name="gender" 
                        onChange={e => this.update(e, e.target.value)}
                        >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Trans</option>
                    </select>
                </div>
                </Modal.Body>

                <Modal.Footer className="alert-dark">
                    <button className="btn btn-secondary" onClick={this.props.cancel}>Cancel</button>
                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                </Modal.Footer>
            </Modal>
        )
    }

}


export default AddUser;