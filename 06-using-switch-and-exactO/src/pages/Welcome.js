import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Link to="new-user"><p>Welcome</p></Link>
      <Outlet />
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome</p>} />
      </Routes> */}
    </section>
  );
};

export default Welcome;