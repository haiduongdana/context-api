import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <div>
      <h1>Blog</h1>
      <nav>Blog Navigation</nav>
      <Outlet /> {/* Nested routes (list of posts or individual post) will be rendered here */}
    </div>
  );
};

export default BlogLayout;