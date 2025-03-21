import Header from "./components/Header.tsx";
import InputForm from "./components/InputForm.tsx";
import CardContainer from "./components/CardContainer.tsx";
import LetterDensity from "./components/LetterDensity.tsx";

function App () {

  let selectedTheme = localStorage.getItem("theme");
  if (!selectedTheme) {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    selectedTheme =  defaultDark ? 'dark' : 'light';
  }
  selectedTheme = selectedTheme ? selectedTheme : "light";

  document.documentElement.setAttribute("data-theme", selectedTheme);

  return (
    <>
      <Header/>
      <div className="tittle-container">
        <h1 className="title">Analyze your text in real-time.</h1>
      </div>
      <InputForm />
      <CardContainer/>
      <LetterDensity />
    </>
  );
}

export default App;
