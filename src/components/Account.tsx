import {
  Avatar,
  Box,
  Button,
  Divider,
  FormGroup,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

const Account = () => {
  // const session = getServerSession(authOptions);
  const { data: session } = useSession();
  const [firstName, lastName] =
    session?.user?.name?.split(" ") || Array(2).fill("Missing Information");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        alignContent: "start",
      }}
    >
      <h2>Account</h2>
      <Grid
        container
        columnSpacing={{ xs: 3, md: 4 }}
        rowSpacing={{ xs: 3 }}
        columns={{ xs: 4, md: 6, lg: 8 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={4} md={2} lg={2}>
          <Paper
            sx={{
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={session?.user?.image || ""}
              alt={session?.user?.name || "User Image"}
              sx={{ width: 64, height: 64, mb: 1 }}
            />
            <h3 style={{ margin: 0 }}>
              {firstName} {lastName}
            </h3>

            <Box sx={{ textAlign: "center", mt: -1, color: "grey" }}>
              <p>Vancouver, BC</p>
              <p style={{ marginTop: "-10px" }}>GMT -7</p>
            </Box>
            <Divider flexItem />
            <Button sx={{ mt: "10px" }}>Upload Picture</Button>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className="paper-box">
            <Box sx={{ py: 1, px: 3 }}>
              <h3>Profile</h3>
              <p>This information is be edited</p>

              <Stack spacing={2} dir="vertical">
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="First Name"
                    name="first_name"
                    required
                    value={firstName}
                  />
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="Last Name"
                    name="last_name"
                    value={lastName}
                    required
                    FormHelperTextProps={{ sx: { margin: "0px" } }}
                  />
                </FormGroup>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="Email Address"
                    name="email"
                    required
                    type="email"
                    value={session?.user?.email ?? ""}
                  />
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                </FormGroup>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="Canada"
                    name="country"
                    required
                    type="tel"
                    value={"Canada"}
                  />
                  <TextField
                    sx={{ width: "45%" }}
                    placeholder="Province"
                    name="province"
                    required
                  />
                </FormGroup>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "45%",
                    }}
                  >
                    Save Details
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Account;
