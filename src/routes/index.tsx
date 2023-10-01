import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <div><h1>About Us</h1></div>
  }
]);

function Routes() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default Routes;
