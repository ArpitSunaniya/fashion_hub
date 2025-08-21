import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Hompage from './Components/hompage';
import Layout from './Components/Layout/layout';
import Men from './Components/men';
import Women from './Components/women';
import Kids from './Components/kids';
import Collection from './Components/collection';
import Trends from './Components/trends';
import { CartProvider } from './Components/Store_Cart/CartContext';
import ShoppingCart from './Components/Store_Cart/ShoppingCart';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "./Components/scrollToTop";

ShoppingCart
function App() {
  const router = createBrowserRouter([


    {

      element: <Layout />,
      children: [
        {

          path: '/',
          element: <Hompage />
        },
        {
          path: "/shoppingCart",
          element: <ShoppingCart />
        },
        {
          path: '/men',
          element: <Men />
        },
        {
          path: '/women',
          element: <Women />
        },
        {
          path: '/kids',
          element: <Kids />
        },
        {
          path: '/collection',
          element: <Collection />
        },
        {
          path: '/trends',
          element: <Trends />
        }
      ]

    }]);

  return (
    <>
      <CartProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
