import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';

import Jokes from './jokes/Jokes';
import Signin from './auth/Signin';
import Signup from './auth/Signup';

const Home = props => {
  return (
    <div className='container'>
      <div className='home'></div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/' exact>
               Home
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/jokes'>
               Jokes
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/signin'>
               Sign in
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/signup'>
               Sign up
            </NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.signout}>Sign out</button>
          </nav>
          <main>
            <Route path='/' component={Home} exact></Route>
            <Route path='/jokes' component={Jokes}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/signup' component={Signup}></Route>
          </main>
        </header>
          
      </div>
    );
  }
  signout = () => {
    localStorage.removeItem('jwt');
  }
}

export default App;
