import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Dialog } from './Dialog/Dialog';
import { CustomDialog } from './CustomDialog/CustomDialog';

function App() {
  const [isDialogOpen, updateIsDialogOpen] = useState(false);
  const [isCustomDialogOpen, updateIsCustomDialogOpen] = useState(false);
  return (
    <div className="App">
      <div>
        <p>
          Two implementations of <strong>Dialog</strong> based on{' '}
          <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/alertdialog.html">standards</a>{' '}
          provided by WCGA
        </p>
        <p>
          CustomDialog: <Button onClick={() => updateIsCustomDialogOpen(true)}>Open</Button>
        </p>
        <p>
          MUI Dialog: <Button onClick={() => updateIsDialogOpen(true)}>Open</Button>
        </p>
      </div>
      <Dialog open={isDialogOpen} onClose={() => updateIsDialogOpen(false)} />
      <CustomDialog open={isCustomDialogOpen} onClose={() => updateIsCustomDialogOpen(false)} />
    </div>
  );
}

export default App;
