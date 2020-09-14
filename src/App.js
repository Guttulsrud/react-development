import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import {Home} from './components/Home';
import {AboutUsWho} from './components/About';
import Container from 'react-bootstrap/Container';
import {Stocks} from './components/Stocks';

class App extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#292b2c',
                }}
            >
                <BrowserRouter>
                    <NavBar/>
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={AboutUsWho}/>
                            <Route path="/stocks" component={Stocks}/>
                        </Switch>
                    </Container>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
