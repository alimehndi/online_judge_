import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { BrowserRouter,Routes ,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <BrowserRouter>
    <Routes>  
      <Route path="/" element={<Layout />}>
      <Route path="/Home" element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
);
reportWebVitals();
