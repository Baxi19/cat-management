import { Routes ,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cats from '../components/cat/Cats';
import Store from '../components/store/Store';
import Map from '../components/shared/Map';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

const AppRoutes =() => {
  const navigate = useNavigate();
  const position = useSelector((store) => store.cat.position);
  const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=&libraries=geometry,drawing,places`;

  return (
    <Routes>
      <Route path="/" element={<Cats/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/map" element={
        <>
          <Button 
            variant="contained" 
            style={{ marginBottom: "16px"}}
            onClick={() => navigate("/")}
          >Back</Button>
          <Map  
            googleMapURL={url}
            containerElement={<div style={{ height: "500px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<p>Cargando</p>}
            isMarkerShown={true}
            position={position}
          />
        </>
      }/>
      <Route path="*" element={
        <>
          <h3>NotFound!</h3>
        </>
      }/>
    </Routes>
  );
}
export default AppRoutes;