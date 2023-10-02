import { Routes, Route, Outlet } from 'react-router-dom';
import { Articles } from '../pages';
import App from '../App.tsx'
import Nav from '../components/navbar';

function Layout() {
  return (
    <div>
      <Nav />
      <main className='bg-white dark:bg-black'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:px-0'>
          <Outlet />
        </div></main>
    </div>
  )
}

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='articles' element={<Articles />} />
        <Route path='portfolio' element={<div><h1>Portfolio</h1></div>} />
      </Route>
    </Routes>
  );
}

export default Routing;
