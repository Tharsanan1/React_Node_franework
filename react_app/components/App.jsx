import React from "react";
import BookList from "./BookList.jsx";
import {Tabs, Tab} from 'react-bootstrap';
import SignUP from "./SignUP";
import SignIN from "./SignIN";

const App = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Books</h2>
                    <BookList/>
                </div>
            </div>
        </Tab>
        <Tab eventKey="sign_in" title="SignIn">
            <SignIN/>
        </Tab>
        <Tab eventKey="sign_up" title="SignUp">
            <SignUP/>
        </Tab>
    </Tabs>
);
export default App;