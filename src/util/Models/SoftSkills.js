import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const SoftSkillsDialogue = ({ open,
    handleClose,
    onChangeSoftSkillsInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xl" >
                <DialogTitle id="form-dialog-title">Add Soft Skill</DialogTitle>
                <DialogContent>
                <TextField
                        autoFocus
                        margin="dense"
                        name="skillName"
                        label="Skill Name"
                        type="text"
                        value={data.skillName}
                        onChange={onChangeSoftSkillsInfo}
                        placeholder="Ex: Web Development"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="skillExperience"
                        label="Experience"
                        type="number"
                        value={data.skillExperience}
                        onChange={onChangeSoftSkillsInfo}
                        placeholder="Ex: 5"
                        fullWidth
                        required
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
export default SoftSkillsDialogue; 