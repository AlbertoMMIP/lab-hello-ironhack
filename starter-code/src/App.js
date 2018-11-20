<<<<<<< HEAD
import React, {Component} from 'react';

class App extends Component{
    render(){
        return (
            <div >
            <h1>Home</h1>
            </div>
    );
=======
import React, {Component} from "react";
import Cards from "./Cards";
import Main from "../src/Main";

class App extends Component{
    render(){
        return(
            <div>
                <Main />
                <Cards />
            </div>
        );
>>>>>>> c5dd80edc252b000e7abf9db19fbd5ddb113450d
    }
}

export default App;