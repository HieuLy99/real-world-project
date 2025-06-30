import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/Login';

export const router = createBrowserRouter([
    {
    path: '/',
    element: <LoginPage />,
    children: [
      {
        index: true,
      }
    ]
  },
  {
    path: '/test',
    element: <App />,
    children: [
      {
        index: true,
      }
    ]
  }
]);
