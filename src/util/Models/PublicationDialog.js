import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const PublicationDialog = ({ open,
    handleClose,
    onChangePublicationInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Publication</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="publicationAuthorName"
                        label="Author Name"
                        type="text"
                        onChange={onChangePublicationInfo}
                        value={data.publicationAuthorName}
                        placeholder="Ex: Salman"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="publicationTitle"
                        label="Title"
                        type="text"
                        onChange={onChangePublicationInfo}
                        value={data.publicationTitle}
                        placeholder="Ex: Quality Assurance Testing"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="publicationPublisherName"
                        label="Publisher Name"
                        type="text"
                        onChange={onChangePublicationInfo}
                        value={data.publicationPublisherName}
                        placeholder="Ex: IEEE"
                        fullWidth
                        required
                    />
                        <div style={{ width: '68%' }}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid >
                                    <KeyboardDatePicker
                                        className="educationDatePickerFiled"
                                        margin="normal"
                                        id='publishDate'
                                        label="Publication Date"
                                        format="MM/dd/yyyy"
                                        value={data.publishDate}
                                        name='projectStartDate'
                                        onChange={(e, date, name) => onChangePublicationInfo(e, date, 'publishDate')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        required
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                    <TextField
                        margin="dense"
                        name="publicationUrl"
                        label="Url"
                        type="text"
                        onChange={onChangePublicationInfo}
                        value={data.publicationUrl}
                        placeholder="Ex: www.example.com"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        name="publicationDescription"
                        label="Description"
                        multiline
                        rows='3'
                        onChange={onChangePublicationInfo}
                        value={data.publicationDescription}
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
export default PublicationDialog; 