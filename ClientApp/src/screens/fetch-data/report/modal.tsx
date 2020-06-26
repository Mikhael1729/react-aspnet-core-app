import React, { useRef } from "react";
import { Dialog, AppBar, Button, Toolbar, IconButton, Typography, Slide } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import { grey } from "@material-ui/core/colors";
import Pdf from "react-to-pdf";

interface IModalProps {
  open: boolean;
  children: JSX.Element;
  handleClose: () => void;
  actionButtonText: string;
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      backgroundColor: grey[900],
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Modal({ open, children, handleClose, actionButtonText, title }: IModalProps) {
  const classes = useStyles();
  const ref = useRef(null);

  async function handleSave(toPdf: any) {
    await toPdf();
    handleClose();
  }

  const options = {
    orientation: 'landscape',
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Pdf targetRef={ref} filename="report.pdf" options={options} x={20} y={20} scale={0.65}>
              {({ toPdf }: { toPdf: any }) => (
                <>
                  <Button autoFocus color="inherit" onClick={() => handleSave(toPdf)}>
                    {actionButtonText}
                  </Button>
                </>
              )}
            </Pdf>

          </Toolbar>
        </AppBar>
        <div style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 40, paddingTop: 20 }}>
          <div ref={ref}>
            {children}
          </div>
        </div>
      </Dialog>
    </>
  );
}