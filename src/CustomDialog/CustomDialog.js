import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    display: 'none',
    background: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    margin: '4em',
    padding: '2em',
    border: '2px solid black',
    background: '#fff',
    textAlign: 'left',
  },
});

export const CustomDialog = ({ open, onClose }) => {
  const containerRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    if (containerRef.current) {
      if (open) {
        containerRef.current.style.display = 'block';
        buttonRef.current.focus();
      } else {
        containerRef.current.style.display = undefined;
      }
    }
  }, [open]);

  const classes = useStyle();

  return (
    open && (
      <div ref={containerRef} className={classes.root}>
        <div
          className={classes.dialog}
          aria-labelledby="some-id-title"
          aria-describedby="some-id-content"
          role="alertdialog"
          aria-modal={true}
        >
          <div>
            <h2 id="some-id-title">Title of dialog</h2>
          </div>
          <div id="some-id-content">
            <p>Some content to be read by the screen readers on browsers!</p>
            <p>Maybe this line should be read later?</p>
          </div>
          <div>
            <button ref={buttonRef} onClick={onClose}>
              No
            </button>
            <button onClick={onClose}>Yes</button>
          </div>
        </div>
      </div>
    )
  );
};
