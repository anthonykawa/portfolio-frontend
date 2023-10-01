import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const DARKMODE_KEY = 'darkMode';

function useDarkMode(defaultValue?: boolean): [boolean | undefined, Dispatch<SetStateAction<boolean | undefined>>] {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(() => {
    let currentValue: boolean | undefined;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(DARKMODE_KEY) || String(defaultValue)
      );
    } catch (error: unknown) {
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(DARKMODE_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
