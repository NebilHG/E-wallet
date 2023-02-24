import { createBrowserRouter } from 'react-router-dom';

import App from './App'
import Error from './views/Error'
import AddCard from './views/AddCard';

const router = createBrowserRouter([
    {
    path: '/',
    element: <App/>,
    errorElement: <Error/>
    
    },
    {
      path: '/addcard',
      element: <AddCard/>
    }
    
    
  ]);

  export default router