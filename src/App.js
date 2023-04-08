import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Route/Route';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
