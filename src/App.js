import './App.css';
import Header from './layouts/header/header';
import Main from './layouts/main/main';
import Footer from './layouts/footer/footer';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import BookingPage from './pages/booking-page/booking-page';
import ConfirmedBooking from './pages/confirmed-booking-page/confirmed-booking-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
    </>
  )
);

function App() {
  return (
    <>    
      <Header />
        <RouterProvider router={router}>
          <Main>
            <Outlet />
          </Main>
        </RouterProvider>
      <Footer />
    </>
  );
}

export default App;
