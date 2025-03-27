import { useState } from 'react';

interface DarkModeProps {
  checked: boolean;
}

function DarkMode({ checked }: DarkModeProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const switchTheme = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    document.documentElement.setAttribute(
      'data-theme',
      newIsChecked ? 'dark' : 'light'
    );
    localStorage.setItem('theme', newIsChecked ? 'dark' : 'light');
  };

  return (
    <div className="theme-picker-container">
      <label className="visually-hidden" htmlFor="dark-mode-toggle"></label>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="dark-mode-toggle"
        role="switch"
        checked={isChecked}
        onChange={switchTheme}
      />
    </div>
  );
}

export default DarkMode;
