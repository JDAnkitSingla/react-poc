import React, {Component} from 'react';
import { Form, InputGroup, Col} from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';

class SearchUser extends Component {

    render() {
        return (
            <Form>
                <Col sm={12}>
                <InputGroup >
                    <Form.Control placeholder="Search user..." onChange={e => this.props.onSearch(e.target.value)}></Form.Control>
                    <InputGroup.Append>
                        <InputGroup.Text>
                            <IoSearchOutline></IoSearchOutline>
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                </Col>
            </Form>
        )
    }
}


export default SearchUser;