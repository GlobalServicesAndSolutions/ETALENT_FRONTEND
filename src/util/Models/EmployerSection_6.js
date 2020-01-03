import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const EmployerSectionSix = ({ open,
    onCloseSection_6,
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_6}>
                <DialogTitle id="form-dialog-title">Requisition Team</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="hiringManager"
                        label="Hiring Manager"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="recruiter"
                        label="Recruiter"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="targetRecruiters/Agents"
                        label="Target Recruiters/Agents"
                        type="text"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="recruitementCoordinator"
                        label="Recruitement Coordinator"
                        type="text"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="humanResourceAdministrator"
                        label="Human Resource Administrator"
                        type="text"
                        className="profileInfoTextField"
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseSection_6} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_6} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionSix; 