import React, { Component } from 'react';
import axios from 'axios';


class Jokes extends Component {
    state = {
        jokes: []
    }
  render() {
    return (
      <div>
        <h2>List of Dad Jokes</h2>
        <div>
          {this.state.jokes.map(joke => 
          <div>
            <h2>{joke.setup}</h2>
            <h4 style={{color:'white'}}>{joke.punchline}</h4>
          </div>)}
        </div>
      </div>
    );
  }

  componentDidMount() {
      const token = localStorage.getItem('jwt');

      const endpoint = 'http://localhost:3300/api/jokes';
      const options = {
          headers: {
              Authorization: token
          },
      };
      axios.get(endpoint, options)
      .then(res => {
          console.log(res.data);
          this.setState({ jokes: res.data })
      })
      .catch(err => {
          console.error(err)
      })
  }
}

export default Jokes;