import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardSerial = ({ serial }) => {
  // console.log(serial);
  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {serial.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {serial.overview}
        </Typography>
      </CardContent>

    </Card>

  )
}

export default CardSerial