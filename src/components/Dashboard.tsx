import Grid from "@mui/material/Grid";
import React from "react";
import PaperBox from "./ui/Paper";
import PaidIcon from "@mui/icons-material/Paid";
import PieChart from "./chart/PieChart";
import List from "./ui/List";
import DataTable from "./ui/Table";
import BarChart from "./chart/BarChart";

const Dashboard = () => {
  const products = [
    {
      title: "Healthcare Erbology",
      subtitle: "Updated about 6 hours ago",
      thumbnail:
        "https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Healthcare Erbology",
      subtitle: "Updated about 6 hours ago",
      thumbnail:
        "https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Healthcare Erbology",
      subtitle: "Updated about 6 hours ago",
      thumbnail:
        "https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Healthcare Erbology",
      subtitle: "Updated about 6 hours ago",
      thumbnail:
        "https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <Grid
      container
      rowSpacing={{ xs: 5, md: 7 }}
      columnSpacing={{ xs: 3, md: 4 }}
      columns={{ xs: 4, sm: 6, md: 12, lg: 12 }}
      sx={{
        px: { xs: 0, md: 10 },
        flexGrow: 1,
      }}
    >
      <Grid item xs={4} sm={3} md={4} lg={3}>
        <PaperBox
          helperText="Since Last Month"
          label="Budget"
          title="$24k"
          icon={<PaidIcon fontSize="large" />}
        />
      </Grid>
      <Grid item xs={4} sm={3} md={4} lg={3}>
        <PaperBox
          helperText="Since Last Month"
          label="Budget"
          title="$24k"
          icon={<PaidIcon fontSize="large" />}
        />
      </Grid>

      <Grid item xs={4} sm={3} md={4} lg={3}>
        <PaperBox
          helperText="Since Last Month"
          label="Budget"
          title="$24k"
          icon={<PaidIcon fontSize="large" />}
        />
      </Grid>
      <Grid item xs={4} sm={3} md={4} lg={3}>
        <PaperBox
          helperText="Since Last Month"
          label="Budget"
          title="$24k"
          icon={<PaidIcon fontSize="large" />}
        />
      </Grid>
      <Grid item xs={4} sm={4} md={8} lg={8}>
        <BarChart />
      </Grid>
      <Grid item xs={4} sm={2} md={4} lg={4}>
        <PieChart />
      </Grid>
      <Grid item xs={4} sm={2} md={8} lg={4}>
        <List title="My Products" items={products} />
      </Grid>
      <Grid item xs={4} sm={4} md={12} lg={8}>
        <DataTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
