import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PaidIcon from '@mui/icons-material/Paid';
import { setStoreFruitsActions } from '../../redux/storeDuck';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Container = (props) => {
    const dispatch = useDispatch();
    const cont = useSelector((store) => store.store.containers);
    const [fruits, setFruits] = useState(useSelector((store) => store.store.fruits));
    const [carts, setCarts] = useState(useSelector((store) => store.store.cart));
    
    const filterById = (id) => fruits.filter(fruit => fruit.container_id === id);
    
    const removeItemFromArr = ( arr, item ) => {
        let last = arr.filter(fruit => (fruit.fruit === item.fruit && fruit.price == item.price)).pop();
        return arr.filter(e => e !== last );
    };
    
    const updateFruits = (array) => {
        dispatch(setStoreFruitsActions(array));
    }

    return (
        <Box sx={{ width: '100%' }}>
            <div dir="rtl">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {cont && 
                        cont.map((item, i) => 
                            <Grid item xs={6}>
                                <Item >
                                    <h4>Container #{item.id}</h4>
                                    {
                                        filterById(item.id).map((fruit, id) =>
                                            <>
                                                <List >
                                                    <ListItem  secondaryAction={
                                                        <IconButton 
                                                            edge="end" 
                                                            aria-label="delete"
                                                            onClick={async () => {
                                                                let filter = removeItemFromArr(fruits, fruit); 
                                                                setFruits(filter);
                                                                updateFruits(filter);
                                                                setCarts([...carts, fruit]);
                                                            }}
                                                        >
                                                            <PaidIcon  />
                                                        </IconButton>
                                                    }>
                                                        <ListItemText 
                                                            primary={` ${fruit.fruit}`}
                                                            secondary={` ${fruit.price} $`}
                                                        />
                                                        <ListItemAvatar >
                                                            <Avatar alt={`${fruit.fruit}`} src={`${fruit.image}`} />
                                                        </ListItemAvatar>
                                                    </ListItem>
                                                </List>
                                            </>
                                        )
                                    }
                                </Item>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </Box>
    );
}

export default Container;