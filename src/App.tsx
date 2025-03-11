import {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/core/Layout';

const Home = lazy(() => import('./pages/Home'));

const App = () => (
   <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Home />} />
         </Route>
      </Routes>
   </BrowserRouter>
);
export default App;
