import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import MUIDialog from '@material-ui/core/Dialog';
import MUIDialogTitle from '@material-ui/core/DialogTitle';
import MUIDialogContent from '@material-ui/core/DialogContent';
import MUIDialogActions from '@material-ui/core/DialogActions';
import MUITypography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: 'none',
  },
});

export const Dialog = ({ open, onClose }) => {
  const dialogRef = useRef();
  const buttonRef = useRef();
  const classes = useStyles({ open });

  return (
    <MUIDialog
      ref={node => {
        dialogRef.current = node;
      }}
      open={open}
      classes={classes}
      transitionDuration={0}
      aria-labelledby="simple-dialog-title"
      aria-describedby="simple-dialog-content"
      PaperProps={{
        'aria-modal': true,
        role: 'alertdialog',
      }}
      onEntered={() => {
        dialogRef.current.style.display = 'block';
        buttonRef.current.focus();
      }}
    >
      <MUIDialogTitle disableTypography>
        <MUITypography id="simple-dialog-title" variant="h5" component="h2">
          Title of dialog
        </MUITypography>
      </MUIDialogTitle>
      <MUIDialogContent id="simple-dialog-content">
        <MUITypography>Some content to be read by the screen readers on browsers!</MUITypography>
        <MUITypography>Maybe this line should be read later?</MUITypography>
      </MUIDialogContent>
      <MUIDialogActions>
        <Button ref={buttonRef} onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose}>Confirm</Button>
      </MUIDialogActions>
    </MUIDialog>
  );
};
