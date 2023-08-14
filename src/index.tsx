import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from './routes/route';
import ErrorPage from './Pages/ErrorPage';
import Preloader from './Components/Preloader/Preloader';
const Home = React.lazy(() => import('./App'));
const About = React.lazy(() => import('./Pages/AboutPage'));
const Causes = React.lazy(() => import('./Pages/CausesPage'));
const Events = React.lazy(() => import('./Pages/EventsPage'));
const Donate = React.lazy(() => import('./Pages/DonatePage'));
const Contact = React.lazy(() => import('./Pages/ContactPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <React.Suspense fallback={<div>...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: 'cause',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <Causes />
          </React.Suspense>
        ),
      },
      {
        path: 'event',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <Events />
          </React.Suspense>
        ),
      },
      {
        path: 'donate',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <Donate />
          </React.Suspense>
        ),
      },
      {
        path: 'volunteer',
        element: (
          <React.Suspense fallback={<Preloader/>}>
            <Donate />
          </React.Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
