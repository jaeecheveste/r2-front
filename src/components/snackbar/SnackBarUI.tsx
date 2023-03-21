import { Snackbar } from '@mui/material'
import Alert from '@mui/material/Alert'
import React from 'react'

export interface IToast {
  message: string
  onCloseToast: () => void
}

const SnackBarUI: React.FC<IToast> = (props: IToast) => {
  return (
    <div>
      <Snackbar open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={2200} onClose={props.onCloseToast}>
        <Alert onClose={props.onCloseToast} severity="error" sx={{ width: '100%' }}>
          {props.message}...
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBarUI;