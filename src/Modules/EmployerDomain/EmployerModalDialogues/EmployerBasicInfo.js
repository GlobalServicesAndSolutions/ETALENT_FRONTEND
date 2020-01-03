import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const EmployerProfileInfo = ({ open, 
    handleClose,
    onCompanySizeChange,
    companySize
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Employer Basic Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="website"
                        label="Web Site link"
                        type="text"
                        placeholder="Ex: http://www.google.com"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="industry"
                        label="Industry"
                        type="text"
                        fullWidth
                        placeholder="Ex: Software"
                        required
                    />
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel>Created By</InputLabel>
                        <Select
                            value={companySize}
                            onChange={onCompanySizeChange}
                        >
                            <MenuItem value='10-50'>10-50</MenuItem>
                            <MenuItem value='51-100'>51-100</MenuItem>
                            <MenuItem value='101-150'>101-150</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="foundYear"
                        label="Founded Year"
                        type="text"
                        fullWidth
                        placeholder="Ex: 2020"
                        required
                    />
                    <TextField
                        name="speciality"
                        label="Speciality"
                        multiline
                        rows="5"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerProfileInfo; 