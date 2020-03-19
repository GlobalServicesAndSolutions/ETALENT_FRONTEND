import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


const AddNewUserDialog = ({ open,
    handleClose,
}) => {;
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstName"
                        label="First Name"
                        type="text"
                        placeholder="Ex: Salman"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        placeholder="Ex: Haider"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="dteOfBirth"
                        label="Date Of Birth"
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="newUserEmail"
                        label="email"
                        type="email"
                        placeholder="salmanhaider0006@hotmail.com"
                        className="profileInfoTextField"
                        required
                    />
                    <FormControl style={{width:'100%', marginTop: '5px' }}>
                        <InputLabel htmlFor="age-native-simple">Choose Role</InputLabel>
                        <Select
                            native
                            required
                            inputProps={{
                                name: 'newUserRoles',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Hiring Manager'}>Hiring Manager</option>
                            <option value={'IT manager'}>IT manager</option>
                            <option value={'Recruiter'}>Recruiter</option>
                            <option value={'Hr Executive'}>Hr Executive</option>
                        </Select>
                    </FormControl>
                    <hr/>
                    <FormLabel component="legend">Address</FormLabel>
                    <TextField
                        margin="dense"
                        name="newUserhouseNumber"
                        label="House Number"
                        type="text"
                        className="profileInfoTextField"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="newUserStreetNumber"
                        label="Street Number"
                        type="text"
                        className="profileInfoTextField"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="newUserPhoneNumber"
                        label="Phone Number"
                        type="text"
                        className="profileInfoTextField"
                        required
                    />
                    <hr/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Create
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default AddNewUserDialog; 