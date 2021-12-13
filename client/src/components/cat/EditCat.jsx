import { forwardRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import catStyles from '../../styles/catStyles';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { setCatSelectedActions, updateCatActions } from '../../redux/catDuck';

const EditCat = forwardRef((props, ref) => {
    const styles = catStyles();
    const dispatch = useDispatch();
    const catSelected = useSelector((store) => store.cat.itemSelected);
    
    const editCat = (item) => {
        updateItemProps(item);
    };

    const updateItem = (catSelected) => {
        dispatch(setCatSelectedActions(catSelected));
        return true;
    };

    const updateItemProps = (item) => {
        dispatch(updateCatActions(item));
        return true;
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.breed) {
          errors.breed = "Required";
        }
        if (!values.description) {
          errors.description = "Required";
        }
        if (!values.latitude) {
          errors.latitude = "Required";
        }
        if (!values.longitude) {
          errors.longitude = "Required";
        }
        if (!values.image) {
          errors.image = "Required";
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            id: parseInt(catSelected.id, 10),
            name: catSelected.name,
            breed: catSelected.breed,
            description: catSelected.description,
            latitude: catSelected.latitude,
            longitude: catSelected.longitude,
            image: catSelected.image
        },
        validate,
        onSubmit: (values) => {
          const newItem = {
            name: formik.values.name,
            breed: formik.values.breed,
            description: formik.values.description,
            latitude: parseFloat(formik.values.latitude),
            longitude: parseFloat(formik.values.longitude),
            image: formik.values.image,
          };
          updateItem(catSelected);
          editCat(newItem);
        },
    });

    return (
        <>
            <div className={styles.modal}>
                <Typography variant="h6" >
                    Edit Cat
                </Typography>
                <TextField
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={styles.inputMaterial}
                    label="Name"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.name}</div>) 
                    : null
                }
                
                <TextField
                    name="breed"
                    onChange={formik.handleChange}
                    value={formik.values.breed}
                    className={styles.inputMaterial}
                    label="Breed"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.breed}</div>) 
                    : null
                }
                
                <TextField
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className={styles.inputMaterial}
                    label="Description"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.description}</div>) 
                    : null
                }
                
                <TextField
                    name="latitude"
                    onChange={formik.handleChange}
                    value={formik.values.latitude}
                    className={styles.inputMaterial}
                    label="Latitude"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.latitude}</div>) 
                    : null
                }
                
                <TextField
                    name="longitude"
                    onChange={formik.handleChange}
                    value={formik.values.longitude}
                    className={styles.inputMaterial}
                    label="Longitude"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.longitude}</div>) 
                    : null
                }
                
                <TextField
                    name="image"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    className={styles.inputMaterial}
                    label="Image"
                />
                {formik.errors.className 
                    ?( <div>{formik.errors.image}</div>) 
                    : null
                }


                <div align="right">
                    <Button
                        color="error"
                        className={styles.buttonCancelModal}
                        onClick={props.showCloseCatModalEdit}
                        startIcon={<CancelIcon />}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="success"
                        className={styles.buttonAddModal}
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                        startIcon={<SaveIcon />}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </>
    )
})

export default EditCat;
