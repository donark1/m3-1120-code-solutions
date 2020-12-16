import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoading: false,
            users: result
          });
        },
        error => {
          this.setState({
            isLoading: false,
            error: error
          });
        }
      );
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
