import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Navigation from "./Layout/Navigation.jsx";
import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import Main from "./Layout/Main.jsx";
import Sellon from "./Layout/Sellon";
import Footer from "./Layout/Footer.jsx";
import Checkout from "./Layout/Checkout";
import Cart from "./Layout/Cart.jsx";
import Cart2 from "./Layout/Cart2.jsx";
import CartStorage from "./Layout/CartStorage";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            logged_in: null,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://www.charitytest.test:8080/api/items")
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });
    }
    render() {
        const divStyle = {
            color: "silver"
            // backgroundImage: 'url('+ '/images/background.jpg' +')',
        };
        return (
            <div style={divStyle}>
                <Navigation />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            console.log("state", this.state);
                            return <Main items={this.state.items} />;
                        }}
                    ></Route>
                    <Route
                        exact
                        path="/sellon"
                        render={() => <Sellon />}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        render={() => <Register />}
                    ></Route>
                    <Route exact path="/login" render={() => <Login />}></Route>
                    <Route
                        exact
                        path="/cart"
                        render={() => <Cart items={this.state.items} />}
                    ></Route>
                    <Route exact path="/cart2" render={() => <Cart2 />}></Route>
                    <Route exact path="/cart3" render={() => <Cart3 />}></Route>
                    <Route
                        exact
                        path="/cartstorage"
                        render={() => <CartStorage />}
                    ></Route>
                    <Route
                        exact
                        path="/checkout"
                        render={() => <Checkout />}
                    ></Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}
