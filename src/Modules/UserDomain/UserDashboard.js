import React, { Component } from 'react';
import UserHeader from './UserHeader';
import AddNewUserDialog from 'util/Models/AddNewUserDialog';
import UsersTable from './UserData';
import EditUserDialog from 'util/Models/EditUserDialog';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddNewUserDialog: false,
      usersData: [],
      selectedUser: {},
      isEditUser: false,
      openEditUserDialog: false
    }
  }
  onClickAddNewUser = () => {
    this.setState({ openAddNewUserDialog: true });
  }
  onCloseAddNewUser = () => {
    this.setState({ openAddNewUserDialog: false });
  }
  onClickEditUser = (user) => {
    this.setState({ selectedUser: user, isEditUser: true, openEditUserDialog: true });
  }
  onCloseEditUserDialog = () => {
    this.setState({ openEditUserDialog: false });
  }
  componentWillMount() {
    const data = [
      {
        id: 1,
        firstName: 'Salman',
        lastName: 'Haider',
        phoneNo: '03110200751',
        email: 'salmanhaider0006@hotmail.com',
        designation: 'Software Engineer',
        department: 'Software',
        eTalentId:'1234564'
      },
      {
        id: 2,
        firstName: 'Imran',
        lastName: 'Khan',
        phoneNo: '03110200751',
        email: 'salmanhaider0006@hotmail.com',
        designation: 'Software Engineer',
        department: 'Software',
        eTalentId:'1234564'
      }
    ];
    this.setState({ usersData: data });
  }
  render() {
    return (
      <div>
        <div >
          <UserHeader />
        </div>
        <div className="app-wrapper">
          <UsersTable
            onClickAddNewUser={this.onClickAddNewUser}
            usersData={this.state.usersData}
            onClickEditUser={this.onClickEditUser}
          />
        </div>
        {this.state.openAddNewUserDialog &&
          <AddNewUserDialog
            open={this.state.openAddNewUserDialog}
            handleClose={this.onCloseAddNewUser}

          />
        }
        {this.state.openEditUserDialog &&
          <EditUserDialog
            open={this.state.openEditUserDialog}
            handleClose={this.onCloseEditUserDialog}
            selectedUser={this.state.isEditUser ? this.state.selectedUser : null}
            isEdit={this.state.isEditUser}
          />
        }
      </div>

    );
  }
}

export default UserDashboard;