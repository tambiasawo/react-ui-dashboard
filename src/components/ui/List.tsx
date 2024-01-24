import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
type itemsContents = {
  title: string;
  subtitle: string;
  thumbnail: string;
};

type Props = {
  items: Array<itemsContents>;
  title: string;
};
export default function ItemsList({ items, title }: Props) {
  return (
    <Paper
      sx={{ px: 3, py: 0.25 /* display: "flex", flexDirection: "column" */ }}
    >
      <h3>{title}</h3>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <ListItemAvatar>
                <Avatar variant="rounded">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width="56"
                    height="56"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ mt: "-4px" }}
                primary={item.title}
                secondary={item.subtitle}
              />
            </Box>
            <span style={{ float: "right" }}>
              <LinearScaleIcon sx={{ transform: "rotate(90deg)" }} />
            </span>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
