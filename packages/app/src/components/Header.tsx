import Logo from "./Logo.tsx";
import ThemePicker from "./ThemePicker.tsx";

function Header () {

  const getTheme = ():string => {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  return (
    <header className="header flex">
      <Logo />
      <ThemePicker theme={getTheme()}/>
    </header>
  );
}

export default Header;
