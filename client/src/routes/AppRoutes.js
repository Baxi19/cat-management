import { Routes ,Route } from 'react-router-dom';
import Cats from '../components/cat/Cats';
import Store from '../components/store/Store';

const AppRoutes =() => {
  return (
    <Routes>
      <Route path="/" element={<Cats/>}/>
      <Route path="/store" element={<Store/>}/>
      {/*<Route path="*" element={<NotFound/>}/>*/}
    </Routes>
  );
}
export default AppRoutes;