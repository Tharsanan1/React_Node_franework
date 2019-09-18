import React from "react";
import {connect} from "react-redux";
import {Form, Button, Alert} from 'react-bootstrap';
import {submitSignIn} from "../actions";

class SignIN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            userName: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleClick(event) {
        let data = {
            userName: this.state.userName,
            password: this.state.password
        };
        this.props.submitSignIn(data);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <Alert show={this.props.signInStatus} variant="danger">
                    <Alert.Heading>Cannot sign you in.</Alert.Heading>
                    <p>
                        Provided details are wrong.
                    </p>
                    <hr />
                </Alert>
                <Form>
                    <Form.Group controlId="formBasicNameSignIn">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder="Enter User Name" value={this.state.name}
                                      onChange={this.handleNameChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordSignIn">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                      onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Button variant="primary"  onClick={this.handleClick}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {signInStatus: state.signInStatus}
}

function mapDispatchToProps(dispatch) {
    return (
        {
            submitSignIn: function (data) {
                dispatch(submitSignIn(data));
            }
        }
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIN);