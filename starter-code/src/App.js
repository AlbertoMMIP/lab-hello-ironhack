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
    }
}

export default App;