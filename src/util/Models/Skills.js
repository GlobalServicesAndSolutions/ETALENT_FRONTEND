import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const SkillsDialogue = ({ open,
     handleClose,
     onChangeSkillsInfo,
     data 
    }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Skill</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="skillName"
                        label="Skill"
                        type="text"
                        value={data.skillName}
                        onChange={onChangeSkillsInfo}
                        placeholder="Ex: Web Development"
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
export default SkillsDialogue; 