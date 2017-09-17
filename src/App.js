import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Menu';
import Menu from "./component/Menu";
import LoginForm from './component/LoginForm';

class App extends Component {

    concac (e) {
         e.preventDefault();
         console.log('con cac')
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Menu/>
                    <h2>deo biet dung the nao</h2>
                </div>
                <div className="App-body">
                    <LoginForm test="hehe" concac={this.concac}/>
                </div>
            </div>
        );
    }
}

export default App;
