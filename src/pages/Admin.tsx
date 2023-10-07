import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminPage = withAuthenticator(function AdminPage() {
  return (
    <div className='overflow-hidden'>
      <aside id='admin-sidebar' className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 drop-shadow-md shadow-slate-950' aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gradient-to-br from-slate-400 to-neutral-400 bg-opacity-50 pt-14'>
        <ul className="space-y-2 font-medium">
         <li>
            <NavLink to="/admin/articles" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3 text-gray-100 group-hover:text-gray-900">Articles</span>
            </NavLink>
          </li>
         <li>
            <NavLink to="/admin/portfolio" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3 text-gray-100 group-hover:text-gray-900">Portfolios</span>
            </NavLink>
          </li>
        </ul>
        </div>
      </aside>
      <div className='pl-64'>
        <Outlet />
      </div>
    </div>
  );
});

export default AdminPage;