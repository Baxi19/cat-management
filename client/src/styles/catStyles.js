import { makeStyles } from '@mui/styles';

export const catStyles = makeStyles((theme) => ({
    formControl: {
      marginRight: "0.8rem",
      marginBottom: "0.8rem",
      minWidth: 100,
    },
  
    searchTextField: {
      marginTop: "0.8rem",
      marginBottom: "0.8rem",
    },
  
    buttonAdd: {
      marginRight: "0.8rem",
      marginBottom: "0.8rem",
      color: "success"
    },
  
    buttonAddModal: {
      marginLeft: "0.8rem",
      marginTop: "0.8rem",
      color: "success",
      margin: "10px",
    },
  
    buttonCancelModal: {
      marginLeft: "0.8rem",
      marginTop: "0.8rem",
      color: "error",
      margin: "10px",
    },
  
    buttonDelete: {
      marginRight: "0.2rem",
      cursor: "pointer",
      color: "error"
    },
  
    buttonActivate: {
      marginRight: "0.2rem",
      cursor: "pointer",
      color: "success",
    },
  
    buttonDeleteInactive: {
      marginRight: "0.2rem",
      cursor: "pointer",
      color: "error",
    },
  
    buttonEdit: {
      marginRight: "0.2rem",
      cursor: "pointer",
      color: "warning",
    },
  
    buttonAccept: {
      color: "success",
      margin: 5,
    },
  
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: "#fff",
      border: "1px solid #000",
      //boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3), 9.990312669749095, -84.12453959591801
      paddingTop: "16px",
      paddingLeft: "16px",
      paddingRight: "16px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  
    iconos: {
      cursor: "pointer",
    },
  
    inputMaterial: {
      width: "100%",
      marginTop: "10px",
    },
  
    selectMaterial: {
      width: "100%",
      height: "50px",
      marginTop: "0.2rem",
    },
  
    inputLabelMaterial: {
    },
  
    // large: {
    //   alignContent: "center",
    //   width: theme.spacing(17),
    //   height: theme.spacing(17),
    // },
  
    // root: {
      
    // },
  
    input: {
      display: "none",
    },
  }));
  
  export default catStyles;