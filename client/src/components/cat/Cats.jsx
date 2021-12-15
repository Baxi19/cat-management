import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardCat from './CardCat';
import InsertCat from './InsertCat';
import EditCat from "./EditCat";
import { 
    setPositionActions, 
    getCatInfoActions, 
    showCloseCatModalActions, 
    showCloseCatModalEditActions, 
    setCatSelectedActions, 
    updateCatActions, 
    deleteCatActions, 
} from "../../redux/catDuck";

const Cats = () => {
    const dispatch = useDispatch();
    const listCats = useSelector((store) => store.cat.array);
    const [cats, setCats] = useState(useSelector((store) => store.cat.array));
    const modalInsert = useSelector((store) => store.cat.modalInsert);
    const modalEdit = useSelector((store) => store.cat.modalEdit);

    const getCatsInfo = () => {
        dispatch(getCatInfoActions());
        setCats(listCats);
    };

    const showCloseCatModal = () => {
        dispatch(showCloseCatModalActions());
    };
    
    const showCloseCatModalEdit = () => {
        dispatch(showCloseCatModalEditActions());
    };
    
    const updateList = () => {
        setCats(listCats);
    };

    const selectCat = (cat) => {
        dispatch(setCatSelectedActions(cat));
        showCloseCatModalEdit();
    };
    
    const deleteCat = (id) => {
        dispatch(deleteCatActions(id));
    };

    const updateGps = (lat, lng) => {
        dispatch(setPositionActions(lat, lng));
    }

    useEffect( () => {
        setCats([]);
        async function fetchData() {
            await getCatsInfo();
        }
        fetchData();
    }, [cats]);

    return (
        <>
            <Box m={1} >
                <Button 
                    variant="contained" 
                    color="success"
                    spacing={1}
                    onClick={showCloseCatModal}    
                >
                    Add Cat
                </Button>
            </Box>

            <Grid
                container
                spacing={3}
            >
                <Grid 
                    container 
                    item xs 
                    spacing={1}
                    >
                    {listCats && 
                        listCats.map((item, i) => 
                        <Box m={1} key={i}>
                            <CardCat 
                                key={item} 
                                item={item} 
                                selectCat={selectCat}
                                updateCatActions={updateCatActions}
                                deleteCat={deleteCat}
                                updateGps={updateGps}
                            />
                        </Box> 
                    )}
                </Grid>
            </Grid>
            <Modal open={modalInsert} onClose={showCloseCatModal}>
                <InsertCat
                    showCloseCatModal={showCloseCatModal}
                    updateList={updateList}
                />
            </Modal>
            <Modal open={modalEdit} onClose={showCloseCatModalEdit}>
                <EditCat
                    showCloseCatModalEdit={showCloseCatModalEdit}
                    updateList={updateList}
                />
            </Modal>
        </>
    )
}

export default Cats;
