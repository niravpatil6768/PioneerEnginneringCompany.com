import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const actions = [
  { icon: <WhatsAppIcon />, name: "WhatsApp" },
  //   { icon: <CallOutlinedIcon />, name: "+91-92650 29853" },
  //   { icon: <PrintIcon />, name: "Print" },
  //   { icon: <ShareIcon />, name: "Share" },
];

export default function Dial() {
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
        <SpeedDialAction
          key={"number"}
          style={{ width: 60, fontSize: 100 }}
          icon={<CallOutlinedIcon />}
          tooltipTitle={
            <span
              style={{
                width: 150,
                fontSize: 15,
                flexDirection: "row",
                display: "flex",
              }}
            >
              +91-92650 29853
            </span>
          }
          tooltipOpen
        />
      </SpeedDial>
    </Box>
  );
}
