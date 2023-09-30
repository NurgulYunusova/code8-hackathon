/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function CustomDialog({ isOpen, onClose, onAccept, onCancel, customerName }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Accept Request</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you accept the request from {customerName}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onAccept();
            onClose();
          }}
          color="primary"
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
