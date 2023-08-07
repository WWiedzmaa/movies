import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function SearchList({ value }) {
    console.log(value);
    return (
        <List>
            {value.map((list) => (
                <ListItem>
                    <ListItemAvatar>
                        {/* <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`} /> */}
                    </ListItemAvatar>
                    <ListItemText>
                    {list.name}
                    </ListItemText>
                </ListItem>
            ))
            }
        </List>
    );
}
