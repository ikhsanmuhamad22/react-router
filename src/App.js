import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products.jsx';
import RootLayout from './pages/RootLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProductsDetail from './pages/ProductsDetail.jsx';

// const routeInitial = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/root', //this is absolute path the has / in the first route
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //this is how to set homePage as a default for this route
      { path: 'products', element: <Products /> }, //this is relative path no / in firts route
      { path: 'products/:productId', element: <ProductsDetail /> },
    ],
  },
]);

// const router = createBrowserRouter(routeInitial);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
