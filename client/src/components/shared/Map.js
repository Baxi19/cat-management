import { 
  withScriptjs, 
  withGoogleMap, 
  GoogleMap, 
  Marker,  
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) => 
<GoogleMap
  zoom={15}
  center={props.position}
>
  {props.isMarkerShown && <Marker position={props.position} /> }
</GoogleMap>
));

export default Map;
