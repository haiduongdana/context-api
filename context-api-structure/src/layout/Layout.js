import { Outlet } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import Footer	 from "./Footer";

const Layout = ({title}) => {
  return (
    <>
      <Header/>
      <main>
        <div className="container-xxl">
          {/* <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title> */}
          <Outlet /> {/* Content specific to the route will be rendered here */}
        </div>
      </main>
      <Footer/>
    </>
  );
};


export default Layout;