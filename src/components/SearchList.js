import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function SearchList({ value }) {
  console.log(value);
  return (
    <List
      style={{
        position: "absolute",
        top: "0",
        backgroundColor:"rgb(128 98 214 / 70%)",
        zIndex: "1000",
        color: "black",
      }}
    >
      {value.map((list) => (
        <ListItem>
          <Link to={`/serch/${list.id +"-" + (list.name ?? list.title).replaceAll(" ","-")}`}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
              />
            </ListItemAvatar>
            <ListItemText>
              {list.name ?? list.title}
              <Divider />
            </ListItemText>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
