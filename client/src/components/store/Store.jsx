import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from './Container';
import { addNewActions } from '../../redux/storeDuck';
import { useDispatch, useSelector } from "react-redux";


const Store = () => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [fruit, setFruit] = useState("");
    const [image, setImage] = useState("");
    const cont = useSelector((store) => store.store.containers);

    const handleChangePrice = (event) => {
        setPrice(event.target.value < 1
            ? (event.target.value = 1)
            : event.target.value
        );
    };
    
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value < 1
            ? (event.target.value = 1)
            : event.target.value
        );
    };
    
    const handleChangeName = (event) => {
        setFruit(event.target.value);
    };
    const handleChangeImage = (event) => {
        setImage(event.target.value);
    };
    
    const addNew = (price, quantity, name, url)=>{
        dispatch(addNewActions(price, quantity, name, url));
    }

    useEffect(() => {
      console.log("Cont updated");
    }, [cont])

    return (
        <>
            <h1>Store</h1>
            <TextField
                style={{ marginRight: "16px", marginBottom: "16px" }}
                type="number"
                label="Price ($)"
                value={price}
                onChange={handleChangePrice}
                name="numberformat"
                id="formatted-numberformat-input"
                variant="standard"
            />
            <TextField
            style={{ marginRight: "16px", marginBottom: "16px" }}
                type="number"
                label="Quantity of Fruits"
                value={quantity}
                onChange={handleChangeQuantity}
                name="numberformat"
                id="formatted-numberformat-input"
                variant="standard"
            />
            <TextField
            style={{ marginRight: "16px", marginBottom: "16px" }}
                label="Name of Fruit"
                value={fruit}
                onChange={handleChangeName}
                id="formatted-numberformat-input"
                variant="standard"
            />
            <TextField
            style={{ marginRight: "16px", marginBottom: "16px" }}
                label="URL of Fruit"
                value={image}
                onChange={handleChangeImage}
                id="formatted-numberformat-input"
                variant="standard"
            />
            <Button 
                variant="contained"
                color="success"
                onClick={() => {
                    if(fruit !== "" && image !== ""){
                        addNew(price, quantity, fruit, image);
                        setPrice(1);
                        setQuantity(1);
                        setFruit("");
                        setImage("");
                    }
                }}    
            >Add New</Button>
            <Container />
        </>
    )
}

export default Store;
