import { Toggle } from '../inputs';
import useDarkMode from '../../hooks/useDarkMode';
import { useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleChange = (checked: boolean | undefined) => {
    setDarkMode(checked);
  }

  return (
    <Toggle
      onChange={handleChange}
      defaultChecked={darkMode}
    />
  )
}

export default DarkModeToggle;
