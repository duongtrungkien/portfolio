import React, { Component } from 'react';

class LoginForm extends Component{
    constructor (props) {
        super(props);
        this.state = {username: '', password: '', status: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (event, type ) {
        if (type === 'username')
            this.setState({username: event.target.value});
        else
            this.setState({password: event.target.value});
    }

    handleClick (a){
        a.preventDefault();
        this.setState({status: true});
        this.props.concac(a);
    }

    /*
        Input has onChange event which receive a function as a call
        let onChange = null;

        emitOnChangeEvent = function () {
            let event = {target: {value: 'aaaaa}}

            if (typeof onChange == 'function') {
                onChange(event)
            }
        }
     */
    render(){
        let {username, password, status} = this.state;
        let {test} = this.props;

        return(
            <form>
                <h1>{test}</h1>
                <label>Username: </label>
                <input type="text" name="username" placeholder="username" value={username} onChange={(event) => this.handleChange(event, 'username')}/>
                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={ (event) => this.handleChange(event, 'password')}/>
                <button onClick={this.handleClick}>dit</button>
                {status ? 'dcm' : 'vcl'}
            </form>
        )
    }
}

export default LoginForm;