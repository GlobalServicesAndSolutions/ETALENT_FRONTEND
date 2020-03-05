import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const ProjectDialog = ({ open,
    handleClose,
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="projectname"
                        label="Project Name"
                        type="text"
                        placeholder="Ex: Web App"
                        fullWidth
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="I am currently working on this project"
                        />
                    </FormGroup>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Start Year </InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={2015}>2015</option>
                            <option value={2016}>2016</option>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">End Year </InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Associated With: </InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'Seven Tech'}>Seven Tech</option>
                            <option value={'Vision X'}>Vision X</option>
                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="projecturl"
                        label="Project Url"
                        type="text"
                        placeholder="Ex: www.example.com"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="projectDescription"
                        label="Description"
                        multiline
                        rows='3'
                        placeholder="Ex: www.example.com"
                        fullWidth
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
export default ProjectDialog; 