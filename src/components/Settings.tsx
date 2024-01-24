import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
} from "@mui/material";

const Settings = () => {
  return (
    <Box width={{ xs: "100%", md: "70%" }} margin="0 auto">
      <h2>Settings</h2>
      <Paper>
        <Box sx={{ py: 0.25, px: 2 }}>
          <h3>Notification</h3>
          <p>Manage your notifications</p>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "80px" },
            py: 0.25,
            px: 2,
          }}
        >
          <FormGroup>
            <h4>Notifications</h4>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Email"
            />
            <FormControlLabel
              required
              control={<Checkbox defaultChecked />}
              label="Push Notifications"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Text Messages"
            />
            <FormControlLabel
              disabled
              control={<Checkbox defaultChecked />}
              label="Phone Call"
            />
          </FormGroup>
          <Box>
            <FormGroup>
              <h4>Messages</h4>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email"
              />
              <FormControlLabel
                required
                control={<Checkbox defaultChecked />}
                label="Push Notifications"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Text Messages"
              />
              <FormControlLabel
                disabled
                control={<Checkbox defaultChecked />}
                label="Phone Call"
              />
            </FormGroup>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "end", py: 1, px: 2 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
            }}
          >
            Save
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ mt: 10 }}>
        <Box sx={{ py: 0.5, px: 2 }}>
          <h3>Password</h3>
          <p style={{ marginTop: "-20px" }}>Update password</p>
        </Box>
        <Divider />
        <Box sx={{ py: 4, px: 2 }}>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <TextField
              sx={{ width: { sm: "100%", md: "50%" } }}
              name="password"
              placeholder="Password"
              required
              type="password"
            />
            <TextField
              sx={{ width: { sm: "100%", md: "50%" } }}
              placeholder="Confirm Password"
              name="confirm-password"
              required
              type="password"
            />
          </FormGroup>
        </Box>
        <Divider />

        <Box sx={{ display: "flex", justifyContent: "end", py: 1, px: 2 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
            }}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;
