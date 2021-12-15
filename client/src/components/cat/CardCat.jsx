import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteCat from './DeleteCat';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardCat = (props) => {
    const navigate = useNavigate();
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));
    
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
                <CardActions style={{justifyContent: 'center'}}>
                    <LocationOnIcon onClick={() => {
                        props.updateGps(parseFloat(props.item.latitude), parseFloat(props.item.longitude));
                        delay(1000).then(() => navigate("/map"));
                    }}/>
                    <EditIcon onClick={() => {
                        props.selectCat(props.item);
                    }}/>
                    <DeleteCat deleteCat={props.deleteCat} item={props.item}/>     
                </CardActions>
            </Card> 
        </>
    )
}

export default CardCat