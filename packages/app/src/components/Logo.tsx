import logoLightTheme from '../assets/logo-light-theme.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={logoLightTheme} alt="logo" className="logo-img" />
    </div>
  );
}

export default Logo;
