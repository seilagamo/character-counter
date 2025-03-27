import {createContext} from "react";


export interface CounterContextType {
  letterDensity:  Map<string, number>;
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  updateCounter: (text: string, excludeSpaces: boolean) => void;
}

const CounterContext = createContext<CounterContextType | undefined>({
  letterDensity: new Map<string, number>(),
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  updateCounter: () => {},
});

export default CounterContext;