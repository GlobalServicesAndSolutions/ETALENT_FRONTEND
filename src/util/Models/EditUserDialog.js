import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const EditUserDialog = ({ open,
    handleClose,
    selectedUser,
    isEdit
}) => {;
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">{isEdit?'Edit User':'Add New User'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="userName"
                        label="Name"
                        type="text"
                        value={isEdit?selectedUser.name:''}
                        placeholder="Ex: Salman"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userPhoneNumber"
                        label="PhoneNumber"
                        type="number"
                        value={isEdit? selectedUser.phoneNo:''}
                        placeholder="Ex: xxxx-xxxxxxx"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userCurrentJob"
                        label="Current Job"
                        type="text"
                        value={isEdit? selectedUser.currentJob:''}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userEmployer"
                        label="Employer"
                        type="text"
                        value={isEdit? selectedUser.employer:''}
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userExperience"
                        label="Experience"
                        type="text"
                        value={isEdit? selectedUser.experience:''}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userStage"
                        label="Stage"
                        type="text"
                        value={isEdit? selectedUser.stage:''}
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userAddress"
                        label="Address"
                        type="text"
                        value={isEdit? selectedUser.address:''}
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="userAppliedDate"
                        label="Applied Date"
                        type="text"
                        value={isEdit? selectedUser.appliedDate:''}
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="userDeparment"
                        label="Department"
                        type="text"
                        value={isEdit? selectedUser.department:''}
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