import React from "react";
import { Box, Avatar, Typography, Button } from "@material-ui/core";
import reportImage from "../../../../images/report.png";

interface IReportTitle {
  title: string;
  actions?: JSX.Element;
}

function renderActions(actions: JSX.Element) {
  return (
    <Box alignSelf="center">
      {actions}
    </Box>
  )
}

export function ReportTitle({ title, actions }: IReportTitle) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyItems="center"
    >
      <Box alignSelf="center">
        <Avatar src={reportImage} variant="square" />
      </Box>
      <Box p={2} flexGrow={1}>
        <Typography variant="h3">
          {title}
        </Typography>
      </Box>

      {actions ? renderActions(actions) : null }
    </Box>
  )
}