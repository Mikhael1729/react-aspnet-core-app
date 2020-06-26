import React from "react";
import { Box, Divider } from "@material-ui/core";
import { DetalleSituacion } from "../../../models/detalles-situacion";
import { DetallesTable } from "./detalles-table/detalles-table";
import { DetallesSummarization } from "./detalles-summarization/detalles-summarization";
import { ReportTitle } from "./report-title/report-title";

interface IReportProps {
  title: string;
  detalles?: DetalleSituacion[];
  actions?: JSX.Element;
  loadingData?: boolean;
}

export function Report(props: IReportProps) {
  return (
    <div>
      <ReportTitle title="Reporte de Situación" actions={props.actions} />

      <Box height={30} />

      <DetallesSummarization detalles={props.detalles} />

      <br />

      <Divider />

      <Box height={30} />
      
      <DetallesTable detalles={props.detalles} />
    </div>
  );
}