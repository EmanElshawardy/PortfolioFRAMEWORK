import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  
  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
<RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
