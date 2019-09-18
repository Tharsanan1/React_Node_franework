import React from "react";
import {connect} from "react-redux";
import {Form, Button, Alert} from 'react-bootstrap';
import {submitSignUp, setSignUp} from "../actions";

class SignUP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            address: '',
            name: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleClick(event) {
        let data = {
            email: this.state.email,
            userName: this.state.name,
            postalAddress: this.state.address,
            password: this.state.password
        };
        this.props.submitSignUp(data);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <Alert show={this.props.signUpStatus} variant="success">
                    <Alert.Heading>Successfully submitted registration request.</Alert.Heading>
                    <p>
                        Please check your email address to confirm the registration.
                    </p>
                    <hr />
                </Alert>
                <Form>
                    <Form.Group controlId="formBasicEmailSignUp">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder="Enter email" value={this.state.email}
                                      onChange = {this.handleEmailChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicNameSignUp">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder="Enter User Name" value={this.state.name}
                                      onChange={this.handleNameChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddressSignUp">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Enter Address" value={this.state.address}
                                      onChange={this.handleAddressChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your address with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasswordSignUp">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                      onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleClick}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {signUpStatus: state.signUpStatus}
}

function mapDispatchToProps(dispatch) {
    return(
        {
            submitSignUp: function(data){
                dispatch(submitSignUp(data));
            },
            setSignUp: function (data) {
                dispatch(setSignUp(data));
            }
        }
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUP);