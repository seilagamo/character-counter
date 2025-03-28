import { use } from 'react';
import CounterContext from '../store/counter-context.ts';

interface CardProps {
  description: string;
  type: string;
}

function Card({ description, type }: CardProps) {
  const counterCtx = use(CounterContext);
  let counter = 0;
  switch (type) {
    case 'character-count':
      counter = counterCtx?.characterCount ?? 0;
      break;
    case 'word-count':
      counter = counterCtx?.wordCount ?? 0;
      break;
    case 'sentence-count':
      counter = counterCtx?.sentenceCount ?? 0;
      break;
    default:
  }

  return (
    <div className={`card ${type}`}>
      <p className="count">{counter}</p>
      <p className="counter-name">{description}</p>
    </div>
  );
}

export default Card;
