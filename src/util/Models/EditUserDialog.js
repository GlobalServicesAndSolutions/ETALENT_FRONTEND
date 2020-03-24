import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const EditUserDialog = ({ open,
    handleClose,
    selectedUser
}) => {;
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstName"
                        label="Name"
                        type="text"
                        value={selectedUser.firstName}
                        placeholder="Ex: Salman"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        autoFocus
                        margin="dense"
                        name="lastName"
                        label="Name"
                        type="text"
                        value={selectedUser.lastName}
                        placeholder="Ex: Haider"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userPhoneNumber"
                        label="Phone Number"
                        type="text"
                        value={selectedUser.phoneNo}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userEmail"
                        label="Email"
                        type="text"
                        value={selectedUser.email}
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userDesignation"
                        label="Designation"
                        type="text"
                        value={selectedUser.designation}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userDepartment"
                        label="Department"
                        type="text"
                        value={selectedUser.department}
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userEtalentId"
                        label="E-Talent Id"
                        type="text"
                        value={selectedUser.eTalentId}
                        className="profileInfoTextField"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Edit
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EditUserDialog; 