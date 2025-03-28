import Header from './components/Header.tsx';
import InputForm from './components/InputForm.tsx';
import CardContainer from './components/CardContainer.tsx';
import LetterDensity from './components/LetterDensity.tsx';
import CounterContext, { CounterContextType } from './store/counter-context.ts';
import { useState } from 'react';

function normalizeText(text: string): string {
  const accentsMap: Record<string, string> = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
    à: 'a',
    è: 'e',
    ì: 'i',
    ò: 'o',
    ù: 'u',
    À: 'A',
    È: 'E',
    Ì: 'I',
    Ò: 'O',
    Ù: 'U',
    ä: 'a',
    ë: 'e',
    ï: 'i',
    ö: 'o',
    ü: 'u',
    Ä: 'A',
    Ë: 'E',
    Ï: 'I',
    Ö: 'O',
    Ü: 'U',
    â: 'a',
    ê: 'e',
    î: 'i',
    ô: 'o',
    û: 'u',
    Â: 'A',
    Ê: 'E',
    Î: 'I',
    Ô: 'O',
    Û: 'U',
    ã: 'a',
    õ: 'o',
    ñ: 'n',
    Ã: 'A',
    Õ: 'O',
    Ñ: 'N',
    å: 'a',
    Å: 'A',
    ç: 'c',
    Ç: 'C',
  };
  return text
    .toLowerCase()
    .replace(/[\u00C0-\u00FF]/g, (match) => accentsMap[match] || match);
}

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
  const [readingTime, setReadingTime] = useState(0);

  function updateCounter(text: string, excludeSpaces: boolean) {
    const normalizedText = normalizeText(text);
    let characters;
    if (excludeSpaces) {
      characters = normalizedText.match(/[a-zA-Z0-9]/g);
    } else {
      characters = normalizedText.match(/[a-zA-Z0-9\s]/g);
    }
    const characterCount = characters ? characters.length : 0;
    const wordCount = normalizedText
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const sentenceCount = normalizedText
      .split(/[.!?]/)
      .filter((sentence) => sentence.length > 0).length;

    setCharacterCount(characterCount);
    setWordCount(wordCount);
    setSentenceCount(sentenceCount);

    // Reading time is calculated as 238 words per minute.
    // This is the average reading speed of an adult.
    // https://www.verywellmind.com/average-reading-speed-2795081
    const rt = Math.ceil(wordCount / 238);
    setReadingTime(rt);

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

    setLetterDensity(count(normalizedText));
  }

  const counterCtxValue: CounterContextType = {
    letterDensity: letterDensity,
    characterCount: characterCount,
    wordCount: wordCount,
    sentenceCount: sentenceCount,
    readingTime: readingTime,
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
