import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { NoReducer } from '@/app/pages/NoReducer';
import { Reducer } from '@/app/pages/Reducer';
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
  {
    path: '/reducer',
    element: <Reducer />,
  },
]);

export const App = function App(): JSX.Element {
  return <RouterProvider router={router} />;
};
