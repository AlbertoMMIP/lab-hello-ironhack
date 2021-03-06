import React, {Component} from "react";
import "./styles/Cards.css";

class Cards extends Component{
    render(){
        return(
            <div className="cards">
                <div className="card">
                    <img src="images/icon1.png" ></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="card">
                    <img src="images/icon2.png" ></img>
                    <h3>Components</h3>
                    <p>Built encapsulated components that manages their state</p>
                </div>
                <div className="card">
                    <img src="images/icon3.png" ></img>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div className="card">
                    <img src="images/icon4.png" ></img>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        );
    }
}

export default Cards;