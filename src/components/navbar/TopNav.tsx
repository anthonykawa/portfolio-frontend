import { NavLink } from 'react-router-dom';

type TopNavProps = {
  to: string;
  name: string;
}

const TopNav = ({ to, name }: TopNavProps) => {
  return (
    <NavLink to={to} className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-300 flex justify-center w-16 text-center">
      <div className='h-10 w-full relative after:absolute after:left-0 after:bottom-0 after:content-[""] after:w-0 after:border-b-2 after:transition-all after:ease-in-out after:hover:w-full dark:after:hover:border-gray-100 after:hover:border-gray-800 flex align-middle justify-center'>
        <span className='my-auto' >{name}</span>
      </div>
    </NavLink>
  );
}

export default TopNav;
