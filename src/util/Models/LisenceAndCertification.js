import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';

const LisenceAndCertification = ({ open, 
    handleClose,
    onChangeLisenceInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add licenses {"&"} certifications</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="lisenceName"
                        label="Name"
                        type="text"
                        value={data.lisenceName}
                        onChange={onChangeLisenceInfo}
                        placeholder="Ex: CCNA"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="organization"
                        label="Issuing Organization"
                        type="text"
                        value={data.organization}
                        onChange={onChangeLisenceInfo}
                        fullWidth
                        placeholder="Ex: Cisco"
                        required
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Issue Month"
                        value="1"
                        fullWidth
                    >
                        <MenuItem key={1} >
                            1
                        </MenuItem>
                    </TextField>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Issue Year"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <br></br>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Expire Month"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Expire Year"
                        value="1"
                        fullWidth
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <TextField
                        margin="dense"
                        name="credentialId"
                        label="Credential ID"
                        type="text"
                        value={data.credentialId}
                        onChange={onChangeLisenceInfo}
                        fullWidth
                        placeholder="Enter Credential ID"
                    />
                    <TextField
                        name="credentialUrl"
                        label="Credential URL"
                        fullWidth
                        value={data.credentialUrl}
                        onChange={onChangeLisenceInfo}
                        placeholder="Enter Credential URL"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save And Add Another
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default LisenceAndCertification; 