import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const CandidatesPopUpInfo = ({ open,
    onCloseCandidateEdit,
    onCandidateStageChange,
    candidateStage,
    selecteCandidate,
}) => {
    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseCandidateEdit}>
                <DialogTitle id="form-dialog-title">Candidate Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="candidateName"
                        value={selecteCandidate.name}
                        label="Name"
                        type="text"
                        className="profileInfoTextField"
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="phoneNo"
                        value={selecteCandidate.phoneNo}
                        label="Phone No."
                        type="text"
                        className="profileInfoTextField"
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        margin="dense"
                        name="recruiter"
                        value={selecteCandidate.recruiter}
                        label="Recruiter"
                        type="text"
                        className="profileInfoTextField"
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Stage</InputLabel>
                        <Select
                            defaultValue={selecteCandidate.stage}
                            name='candidateStage'
                            onChange={onCandidateStageChange}
                        >
                            <MenuItem value='Ready To Apply'>Ready To Apply</MenuItem>
                            <MenuItem value='InterView'>InterView</MenuItem>
                            <MenuItem value='New Application'>New Application</MenuItem>
                            <MenuItem value='Short List'>Short List</MenuItem>
                            <MenuItem value='Background Check'>Background Check</MenuItem>
                            <MenuItem value='Assesments'>Assesments</MenuItem>
                            <MenuItem value='Offers'>Offers</MenuItem>
                            <MenuItem value='Ready For Hire'>Ready For Hire</MenuItem>
                            <MenuItem value='Hired'>Hired</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="appliedDate"
                        label="Applied Date"
                        type="text"
                        value={selecteCandidate.appliedDate}
                        InputProps={{
                            readOnly: true,
                          }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseCandidateEdit} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseCandidateEdit} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default CandidatesPopUpInfo; 