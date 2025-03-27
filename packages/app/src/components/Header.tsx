import Logo from './Logo.tsx';
import DarkMode from './DarkMode.tsx';

function Header() {
  const getTheme = (): string => {
    return document.documentElement.getAttribute('data-theme') || 'light';
  };

  return (
    <header className="header flex">
      <Logo />
      <DarkMode checked={getTheme() === 'dark'} />
    </header>
  );
}

export default Header;
