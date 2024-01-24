import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

type Props = {
  label: string;
  title: string;
  icon: React.ReactElement;
  helperText: string;
};
const PaperBox = ({ label, title, icon, helperText }: Props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        py: 2,
        px: 1,
      }}
    >
      <Box>
        <p> {label}</p>
        <h2>{title}</h2>
        <h6>{helperText}</h6>
      </Box>
      <Box>{icon}</Box>
    </Paper>
  );
};

export default PaperBox;
