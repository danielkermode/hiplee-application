import React, { Component } from 'react';
import Button from './components/Button';
import UsersList from './components/UsersList';
import { connect } from 'react-redux';
import { loadUsers } from './redux/reducers/users'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          buttonText={"Get users!"}
          onClick={this.props.loadUsers}
        />
        <UsersList users={this.props.users || []} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers())
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

// export default App
