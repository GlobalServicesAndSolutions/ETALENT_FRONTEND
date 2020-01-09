import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';

const EducationDialog = ({ open, 
    handleClose,
    onChangeEducationInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Education</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="school"
                        label="School"
                        type="text"
                        value={data.school}
                        onChange={onChangeEducationInfo}
                        placeholder="Ex: Abasyn University"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="degree"
                        label="Degree"
                        type="text"
                        value={data.degree}
                        onChange={onChangeEducationInfo}
                        fullWidth
                        placeholder="Ex: BSSE"
                    />
                    <TextField
                        margin="dense"
                        name="fieldofstudy"
                        label="Field Of Study"
                        type="text"
                        value={data.fieldofstudy}
                        onChange={onChangeEducationInfo}
                        fullWidth
                        placeholder="Ex: Computer Science or IT"
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Start Year"
                        value="1"
                        helperText="Please Select Your Degree Starting Year"
                    >
                        <MenuItem key={1} >
                            1
                        </MenuItem>
                    </TextField>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        id="standard-select-currency"
                        select
                        label="End Year (or expected)"
                        value="1"
                        helperText="Please Select Degree Ending Year or expected"
                    >
                        <MenuItem  >
                            1
                        </MenuItem>
                    </TextField>
                    <TextField
                        margin="dense"
                        name="grade"
                        label="Grade"
                        type="text"
                        value={data.grade}
                        onChange={onChangeEducationInfo}
                        fullWidth
                        placeholder="Enter your Grade"
                    />
                    <TextField
                        name="activitiesAndSocieties"
                        label="Activities and societies"
                        multiline
                        rows="5"
                        fullWidth
                        value={data.activitiesAndSocieties}
                        onChange={onChangeEducationInfo}
                    />
                    <TextField
                        name="description"
                        label="Description"
                        value={data.description}
                        onChange={onChangeEducationInfo}
                        multiline
                        rows="5"
                        fullWidth
                    />
                    <br />
                    <br />
                    <br />
                    <p>Media<br />
                        Add or link to external documents, photos, sites, videos, and presentations.</p>

                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className="inputImage"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                    </Button>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outlined" component="span">
                        Link
                    </Button>
                    <TextField
                        margin="dense"
                        name="link"
                        label="Link"
                        type="text"
                        fullWidth
                        placeholder="Post or type a link to a file or vedio"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EducationDialog; 