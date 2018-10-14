import React, { Component } from 'react';
import Button from './components/Button';
import UsersList from './components/UsersList';
import ActiveUser from './components/ActiveUser';
import { connect } from 'react-redux';
import { loadUsers, selectActiveUser } from './redux/reducers/users'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.activeUser)
    return (
      <div className="App">
        <Button
          buttonText={"Get users!"}
          onClick={this.props.loadUsers}
        />
        <UsersList
          users={this.props.users || []}
          selectActiveUser={this.props.selectActiveUser}
        />
        <ActiveUser activeUser={this.props.activeUser || {}} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list,
    activeUser: state.users.activeUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers())
    },
    selectActiveUser: user => {
      dispatch(selectActiveUser(user))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

// export default App
