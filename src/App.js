import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const requestURL = `https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(requestURL);
    this.setState({ users: res.data.items, loading: false});
  }

  getUser = async (username) => {
    this.setState({ loading: true });
    const requestURL = `https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(requestURL);
    this.setState({ user: res.data, loading: false});
  }

  clearUsers = () => this.setState({ users: [], loading: false})

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }})
    setTimeout(() => { 
      this.setState({ alert: null })
    }, 5000)
  }

  render () {
    const { users, user, loading} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Alert alert={this.state.alert}></Alert>


        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>

<Search searchUsers={this.searchUsers}
        clearUsers={this.clearUsers}
        showClear={this.state.users.length > 0 ? true : false}
        setAlert={this.setAlert}
        ></Search>
        <Users loading={this.state.loading} users={this.state.users}></Users>


            </Fragment>
          )}></Route>


          <Route exact path='/about' component={About}></Route>
          <Route exact path='/user/:login' render={props => (
              <User { ...props } getUser={this.getUser} user={user} loading={loading}/>
      
           )}/>

        
        </Switch>




        </div>
      </div>
      </Router>
    );
  }

}

export default App;
