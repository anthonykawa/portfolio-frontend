import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import DarkModeToggle from '../darkModeToggle';
import TopNav from './TopNav';
import _ from 'lodash';

function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  
  const didScrollPage = useCallback(() => {
    console.log('didScrollPage');
    if (window.scrollY > 20) {
      updateNavTransparency(
        ['bg-white/95', 'dark:bg-gray-800/95'],
        ['bg-white/0', 'dark:bg-gray-800/0'],
      );
    } else {
      updateNavTransparency(
        ['bg-white/0', 'dark:bg-gray-800/0'],
        ['bg-white/95', 'dark:bg-gray-800/95'],
      )
    }
  }, []);

  const updateNavTransparency = (classesToAdd: string[], classesToRemove: string[]) => {
    _.forEach(classesToAdd, (classToAdd) => {
      headerRef.current?.classList.add(classToAdd);
    });
    _.forEach(classesToRemove, (classToRemove) => {
      headerRef.current?.classList.remove(classToRemove);
    });
  }

  useEffect(() => {
    const isHome = location.pathname === '/';
    if (window.scrollY > 20 || !isHome) {
      updateNavTransparency(
        ['bg-white/95', 'dark:bg-gray-800/95'],
        ['bg-white/0', 'dark:bg-gray-800/0'],
      );
    }

    window.addEventListener('scroll', didScrollPage);
    if (!isHome) {
      console.log('removing listener');
      window.removeEventListener('scroll', didScrollPage);
    }
    () => window.removeEventListener('scroll', didScrollPage);
  }, [location.pathname]);

  return (
    <nav ref={headerRef} className={`fixed flex items-center bg-white/0 dark:bg-gray-800/0 justify-between p-6 lg:px-8 drop-shadow-sm w-full transition-all ease-in-out duration-100 z-50 backdrop-blur-sm`} aria-label="Global">
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
      <div className="hidden lg:flex lg:align-middle lg:gap-x-12 max-w-3xl xl:max-w-4xl mx-auto w-full">
        <TopNav to='/' name='Home' />
        <TopNav to='/articles' name='Articles' />
        <TopNav to='/work' name='Work' />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
