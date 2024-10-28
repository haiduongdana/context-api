import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

import Blogs from "./pages/Blogs";
import Groceries from "./pages/Groceries";
import Grocery from "./pages/Grocery";
import NoPage from "./pages/NoPage";

import { Home } from './pages/Home/index';
//import Users from './pages/User/index';
//import { User } from './pages/User/user';
import About from './pages/About';
import { Contact } from './pages/Contact/index';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="groceries" element={<Groceries />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;