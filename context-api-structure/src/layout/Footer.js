import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container-xxl">
		<p className="float-end"><a href="#">Back to top</a></p>
		<p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
	</footer>
  );
};
		
export default Footer;