import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
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
