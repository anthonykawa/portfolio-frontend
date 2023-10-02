import DarkModeToggle from '../darkModeToggle';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 bg-stone-100 dark:bg-zinc-900 drop-shadow-sm" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 max-w-3xl xl:max-w-5xl mx-auto w-full">
        <NavLink to='/' className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Home</NavLink>
        <NavLink to='/articles' className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Articles</NavLink>
        <NavLink to='/portfolio' className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">Portfolio</NavLink>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
