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
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: "100%",
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Information Technology',
    'Management',
    'Accounts',
    'Finance',
    'Scrum Master',
    'Supervisor',
    'Project Manager',
];
function getStyles(name, jobCatagoryAlert, theme) {
    return {
      fontWeight:
      jobCatagoryAlert.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const JobAlertCreateModel = ({ open,
    handleClose,
    alertJobTypeValue,
    onchangeAlertJobType
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [jobCatagoryAlert, setjobCatagoryAlert] = React.useState([]);
    const [jobLoctionAlert, setjobLoctionAlert] = React.useState([]);
    const [jobTypelert, setjobTypelert] = React.useState([]);

    const handleChange = event => {
        setjobCatagoryAlert(event.target.value);
    };
    const handleChangeLocation = event => {
        setjobLoctionAlert(event.target.value);
    };
    const handleChangeJobType = event => {
        setjobTypelert(event.target.value);
    };
    return (
        <div className='alertDialogSize'>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm'  >
                <DialogTitle id="form-dialog-title">New Alert</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="nameOfJobAlert"
                        label="Name Of Your Job Alert"
                        type="text"
                        placeholder="Ex: Software Engineer"
                        fullWidth
                        required
                    />
                    <FormControl style={{ width: '100%' }}>
                        <InputLabel htmlFor="age-native-simple">Frequency</InputLabel>
                        <Select
                            native
                            required
                        >
                            <option value="" />
                            <option value={'Weekly'}>Weekly</option>
                            <option value={'Monthly'}>Monthly</option>
                            <option value={'Hourly'}>Hourly</option>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Job Category</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={jobCatagoryAlert}
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            required
                            MenuProps={MenuProps}
                        >
                            {names.map(name => (
                                <MenuItem key={name} value={name} style={getStyles(name, jobCatagoryAlert, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Location Region/State/Province</InputLabel>
                        <Select
                        required
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={jobLoctionAlert}
                            onChange={handleChangeLocation}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map(name => (
                                <MenuItem key={name} value={name} style={getStyles(name, jobLoctionAlert, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <hr />
                    <FormLabel component="legend">Full /Part-time</FormLabel>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="jobType" row>
                            <FormControlLabel
                                value="fullTime"
                                control={<Radio color="primary" />}
                                label="Full Time"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="partTime"
                                control={<Radio color="primary" />}
                                label="Part Time"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="bothFullAndPartTime"
                                control={<Radio color="primary" />}
                                label="Both"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    <hr/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Job Type</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={jobTypelert}
                            onChange={handleChangeJobType}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map(name => (
                                <MenuItem key={name} value={name} style={getStyles(name, jobTypelert, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Location</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={jobTypelert}
                            onChange={handleChangeJobType}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map(name => (
                                <MenuItem key={name} value={name} style={getStyles(name, jobTypelert, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default JobAlertCreateModel; 