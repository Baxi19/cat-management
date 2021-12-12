import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardCat = (props) => {
    return (
        <>
           <Card sx={{ width: 300, margin: "16px" }}>
                <CardMedia
                    component="img"
                    alt={props.item.name}
                    height="140"
                    image={props.item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.item.breed}: {props.item.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Localize</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card> 
        </>
    )
}

export default CardCat
