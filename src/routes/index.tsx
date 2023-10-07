import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { Articles, Admin, Article, Error404, Work } from '../pages';
import App from '../App.tsx'
import Nav from '../components/navbar';
import { ReactNode } from 'react';
import _ from 'lodash';
import { WithAuthenticatorProps, withAuthenticator } from '@aws-amplify/ui-react';
import { AdminArticles, AdminPortfolio } from '../components/admin';

function Layout() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <main className={`bg-white ${location.pathname === '/' ? 'bg-opacity-0 dark:bg-opacity-0' : ''} dark:bg-gray-600`}>
        <Outlet />
      </main>
    </div>
  )
}

function PageLayout() {
  return (
    <div className='pt-24 lg:w-7/12 md:w-9/12 sm:w-11/12 mx-auto'><Outlet /></div>
  )
}

const ProtectedAdminRoute = withAuthenticator(({ user, children }: { children: ReactNode } & WithAuthenticatorProps) => {
  const groups = _.get(user?.getSignInUserSession()?.getAccessToken(), 'payload.cognito:groups', []);
  if (!_.includes(groups, 'Admins')) return <Navigate to='/' replace />
  return children;
});

// const ProtectedRoute = withAuthenticator(({ user, children }: { children: ReactNode } & WithAuthenticatorProps) => {
//   if (!user) return <Navigate to='/' replace />
//   return children;
// });

function Routing() {
  return (
    <Routes>
      <Route path='/admin' element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>}>
        <Route path='articles' element={<AdminArticles />} />
        <Route path='portfolio' element={<AdminPortfolio />} />
      </Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='articles' element={<PageLayout />}>
          <Route index element={<Articles />} />
          <Route path=':id' element={<Article />} />
        </Route>
        <Route path='work' element={<PageLayout />}>
          <Route index element={<Work />} />
        </Route> 
        <Route path='404' element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default Routing;
