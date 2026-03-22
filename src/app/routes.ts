import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';
import Technology from './pages/Technology';
import Charging from './pages/Charging';
import TestRide from './pages/TestRide';
import About from './pages/About';
import Contact from './pages/Contact';
import Dealers from './pages/Dealers';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'vehicles',
        Component: Vehicles
      },
      {
        path: 'vehicle/:id',
        Component: VehicleDetail
      },
      {
        path: 'technology',
        Component: Technology
      },
      {
        path: 'charging',
        Component: Charging
      },
      {
        path: 'test-ride',
        Component: TestRide
      },
      {
        path: 'dealers',
        Component: Dealers
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);