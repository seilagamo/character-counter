import {useState} from "react";

interface ThemePickerProps {
  theme: string;
}

function ThemePicker ({theme}: ThemePickerProps) {
  const [isChecked, setIsChecked] = useState(theme === "dark");


  const switchTheme = () => {
    setIsChecked(!isChecked);

    document.documentElement.setAttribute('data-theme', isChecked ? 'dark' : 'light');
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');
  };

  return (
    <div className="theme-picker-container">
      <label className="visually-hidden"
             htmlFor="dark-mode-toggle"></label>
      <input type="checkbox" id="dark-mode-toggle" className="dark-mode-toggle"
             role="switch" checked={isChecked} onChange={switchTheme}/>
    </div>
  );
}

export default ThemePicker;