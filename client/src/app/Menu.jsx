import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PetsIcon from '@mui/icons-material/Pets';
import StoreIcon from '@mui/icons-material/Store';

const Menu = () => {
    const navigate = useNavigate();
    return (
        <div> 
            <ListItem button onClick={() => navigate("/")}>
                <ListItemIcon>
                    <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="Cats" />
            </ListItem>
        
            <ListItem button onClick={() => navigate("/store")}>
                <ListItemIcon>
                    <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Store" />
            </ListItem>
        </div>
    )
}
export default Menu;