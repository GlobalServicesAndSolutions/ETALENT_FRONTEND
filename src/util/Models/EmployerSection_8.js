import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import QueueIcon from '@material-ui/icons/Queue';
import { FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const EmployerSectionEight = ({ open,
    onCloseSection_8,
    onSectionValuesChange,
    onSaveSectionEight,
    onClickAddQuestion,
    isAddQuestion,
    onChangeQuestionType,
    questionTypeValue
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_8}>
                <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
                <DialogContent>
                    <QueueIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={onClickAddQuestion} />
                    <p style={{ cursor: 'pointer' }} onClick={onClickAddQuestion}>Add Question</p>
                    {isAddQuestion && <div>
                        <hr />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choose the Question Type</FormLabel>
                            <RadioGroup aria-label="position" name="jobType" value={questionTypeValue} onChange={onChangeQuestionType} row>
                                <FormControlLabel
                                    value="Freetext"
                                    control={<Radio color="primary" />}
                                    label="Free Text"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Yes/No"
                                    control={<Radio color="primary" />}
                                    label="Yes or No"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="MultipleChoice"
                                    control={<Radio color="primary" />}
                                    label="Multiple Choice"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                        <hr />
                    </div>}
                    {questionTypeValue==='Freetext' &&
                        <div>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="employerQuestion1"
                            label="Question 1"
                            type="text"
                            fullWidth
                        />
                    </div>}
                    {questionTypeValue ==='Yes/No'&&
                    <div>
                        <TextField
                            margin="dense"
                            name="yes/noQuestion"
                            label="Question"
                            type="text"
                            fullWidth
                        />
                        <hr/>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choose Yes or No</FormLabel>
                            <RadioGroup aria-label="position" name="jobType"  row>
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio color="primary" />}
                                    label="Yes"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio color="primary" />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>}
                    {questionTypeValue==='MultipleChoice' &&
                        <div>
                        <TextField
                            margin="dense"
                            name="multipleChoiseQuestion"
                            label="Question"
                            type="text"
                            fullWidth
                        />
                        <hr/>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choose the Best</FormLabel>
                            <RadioGroup aria-label="position" name="jobType" row>
                                <FormControlLabel
                                    value="Choise1"
                                    control={<Radio color="primary" />}
                                    label="Choise 1"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Choise2"
                                    control={<Radio color="primary" />}
                                    label="Choise 2"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Choise3"
                                    control={<Radio color="primary" />}
                                    label="Choise 3"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Choise4"
                                    control={<Radio color="primary" />}
                                    label="Choise 4"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSaveSectionEight} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_8} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionEight; 