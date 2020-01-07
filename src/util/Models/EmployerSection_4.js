import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const EmployerSectionFour = ({ open,
    onCloseSection_4,
    data,
    onSectionValuesChange,
    onSaveSectionFour
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_4}>
                <DialogTitle id="form-dialog-title">Contract Information</DialogTitle>
                <DialogContent>
                <FormLabel component="legend"><strong>Duration</strong></FormLabel>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Years</InputLabel>
                        <Select
                            value={data.contractYears}
                            name='contractYears'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='1'>1</MenuItem>
                            <MenuItem value='2'>2</MenuItem>
                            <MenuItem value='3'>3</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Months</InputLabel>
                        <Select
                            value={data.contractMonth}
                            name='contractMonth'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Days</InputLabel>
                        <Select
                            value={data.contractDays}
                            name='contractDays'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={21}>21</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={23}>23</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={26}>26</MenuItem>
                            <MenuItem value={27}>27</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={29}>29</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={31}>31</MenuItem>

                        </Select>
                    </FormControl>
                    <hr/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"><strong>Visa Status</strong></FormLabel>
                        <RadioGroup aria-label="position" name="visaStatusvalue" value={data.visaStatusvalue} onChange={onSectionValuesChange} row>
                            <FormControlLabel
                                value="F1"
                                control={<Radio color="primary" />}
                                label="F1"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="H1B"
                                control={<Radio color="primary" />}
                                label="H1B"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="EAD"
                                control={<Radio color="primary" />}
                                label="EAD"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="GC"
                                control={<Radio color="primary" />}
                                label="GC"
                                component="legend"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="USC"
                                control={<Radio color="primary" />}
                                label="USC"
                                component="legend"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                     <hr />
                     <TextField
                        margin="dense"
                        name="billRateCurrency"
                        label="Bill Rate Currency"
                        type="text"
                        value={data.billRateCurrency}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: USD"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="billRate"
                        label="Bill Rate/Hour"
                        type="text"
                        value={data.billRate}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: 1"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Commute</strong></FormLabel>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Commute Currency</InputLabel>
                        <Select
                            value={data.commuteCurrencyValue}
                            name='commuteCurrencyValue'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='Yes'>Yes</MenuItem>
                            <MenuItem value='No'>No</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Commute Amount</InputLabel>
                        <Select
                            value={data.commuteAmountValue}
                            name='commuteAmountValue'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='Yes'>Yes</MenuItem>
                            <MenuItem value='No'>No</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSaveSectionFour} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_4} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionFour; 