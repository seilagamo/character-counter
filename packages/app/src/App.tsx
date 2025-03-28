import Header from './components/Header.tsx';
import InputForm from './components/InputForm.tsx';
import CardContainer from './components/CardContainer.tsx';
import LetterDensity from './components/LetterDensity.tsx';
import CounterContext, { CounterContextType } from './store/counter-context.ts';
import { useState } from 'react';

function App() {
  let selectedTheme = localStorage.getItem('theme');
  if (!selectedTheme) {
    const defaultDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    selectedTheme = defaultDark ? 'dark' : 'light';
  }
  selectedTheme = selectedTheme ? selectedTheme : 'light';

  document.documentElement.setAttribute('data-theme', selectedTheme);

  const [letterDensity, setLetterDensity] = useState<Map<string, number>>(
    new Map()
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  function updateCounter(text: string, excludeSpaces: boolean) {
    let characters;
    if (excludeSpaces) {
      characters = text.match(/[a-zA-Z0-9]/g);
    } else {
      characters = text.match(/[a-zA-Z0-9\s]/g);
    }
    const characterCount = characters ? characters.length : 0;
    const wordCount = text
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const sentenceCount = text
      .split(/[.!?]/)
      .filter((sentence) => sentence.length > 0).length;

    setCharacterCount(characterCount);
    setWordCount(wordCount);
    setSentenceCount(sentenceCount);

    // https://www.totaltypescript.com/how-to-type-array-reduce
    const count = (s: string) => {
      return s
        .split('')
        .reduce(
          (obj: Map<string, number>, char: string): Map<string, number> => {
            if (excludeSpaces) {
              if (!char.match(/[a-zA-Z0-9]/g)) {
                return obj;
              }
            } else {
              if (!char.match(/[a-zA-Z0-9\s]/g)) {
                return obj;
              }
            }
            obj.set(char, (obj.get(char) ?? 0) + 1);
            return obj;
          },
          new Map<string, number>()
        );
    };

    setLetterDensity(count(text));
  }

  const counterCtxValue: CounterContextType = {
    letterDensity: letterDensity,
    characterCount: characterCount,
    wordCount: wordCount,
    sentenceCount: sentenceCount,
    updateCounter: updateCounter,
  };

  return (
    <>
      <Header />
      <div className="tittle-container">
        <h1 className="title">Analyze your text in real-time.</h1>
      </div>
      <CounterContext value={counterCtxValue}>
        <InputForm />
        <CardContainer />
        <LetterDensity />
      </CounterContext>
    </>
  );
}

export default App;
