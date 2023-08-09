import {PhoneConfirmationScreen} from '@screens/PhoneConfirmationScreen';
import {RegistrationScreen} from '@screens/RegistrationScreen';
import {SuccessfulProfileScreen} from '@screens/SuccessfulProfileScreen';
import {SuccessfulRegistrationScreen} from '@screens/SuccessfulRegistrationScreen';
import {UserProfileScreen} from '@screens/UserProfileScreen';
import * as React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const Routers: React.FC = () => {
  const routes = [
    {
      path: '/',
      element: <RegistrationScreen />,
    },
    {
      path: '/phone-confirmation',
      element: <PhoneConfirmationScreen />,
    },
    {
      path: '/successful-registration',
      element: <SuccessfulRegistrationScreen />,
    },
    {
      path: '/user-profile',
      element: <UserProfileScreen />,
    },
    {
      path: '/successful-profile',
      element: <SuccessfulProfileScreen />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
export default Routers;
