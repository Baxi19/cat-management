import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteCat from './DeleteCat';
import SearchIcon from '@mui/icons-material/Search';

const CardCat = (props) => {
    return (
        <>
           <Card key={props.item.id} sx={{ width: 300, margin: "10px" }}>
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
                    <SearchIcon onClick={() => {

                    }}/>
                    <EditIcon onClick={() => {
                        props.selectCat(props.item, "Edit");
                    }}/>

                    <DeleteCat deleteCat={props.deleteCat} item={props.item}/>
                    
                </CardActions>
            </Card> 
        </>
    )
}

export default CardCat