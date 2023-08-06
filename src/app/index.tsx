import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { NoReducer } from '@/app/pages/NoReducer';
import { Root } from '@/app/pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/no-reducer',
    element: <NoReducer />,
  },
]);

export const App = function App(): JSX.Element {
  return <RouterProvider router={router} />;
};
