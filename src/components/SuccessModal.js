import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: "12px 16px 0", color: "#800080" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          title="Close"
          sx={{
            position: "absolute",
            right: "-10px",
            color: "#fff",
            top: "-10px",
            background: props?.err?"red":"#39BB0B",
            // border:"1px solid #800080",
            borderRadius: "100%",
            "&:hover": {
              background: props?.err?"red":"#39BB0B",
            },
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon sx={{ fontSize: "1.3rem" }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const SuccessModal = ({ setShowSnackbar, showSnackbar, err }) => {
  return (
    <Dialog
      onClose={() => setShowSnackbar(false)}
      aria-labelledby="customized-dialog-title"
      open={showSnackbar}
      sx={{
        "& .MuiDialogContent-root": {
          padding: "1rem",
          border: "none",
        },
        "& .MuiDialogActions-root": {
          padding: "1rem",
        },
        "& .MuiPaper-root": {
          overflowY: "inherit",
        },
        "& .MuiDialog-paper": {
          width: "500px",
          maxWidth: "1222px",
          // background: "#E4D5F4",
          border: err ? "2px solid red" : "2px solid #39BB0B",
          borderRadius: "10px",
        },
        "& .MuiDialog-container": {
          backdropFilter: "blur(5px)",
        },
      }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setShowSnackbar(false)}
        err={err}
      >
        <Typography
          sx={{
            color: err ? "red" : "green",
            fontSize: "1.2rem",
            borderBottom: err?"1px solid red":"1px solid #39BB0B",
            pb: "0.3rem",
            mb: "0.3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.1rem",
          }}
        >
          {err ? <ErrorIcon /> : <TaskAltIcon sx={{ mb: "2px" }} />}
          {err ? "Error" : "Success"}
        </Typography>
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            textAlign: "center",
            py: "1.5rem",
            //   fontSize: "1.2rem",
            color: err ? "red" : "green",
            lineHeight: "1.2rem",
          }}
        >
          {err ? (
            err
          ) : (
            <>
              Thanks for showing interest,
              <br /> will get back to you
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
