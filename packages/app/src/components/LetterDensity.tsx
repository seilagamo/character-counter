import Bar from './Bar.tsx';
import { use } from 'react';
import CounterContext from '../store/counter-context.ts';

function LetterDensity() {
  const counterCtx = use(CounterContext);

  const letterDensity: Map<string, number> =
    counterCtx?.letterDensity ?? new Map<string, number>();
  const sortedLD = Array.from(letterDensity.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <>
      <div className="density-container">
        <h2>Letter Density</h2>
        <div className="grid density-chart">
          {sortedLD.map(([letter, count]) => (
            <Bar
              key={letter}
              letter={letter}
              count={count}
              percentage={
                (letterDensity.get(letter) ?? 0) /
                (counterCtx?.characterCount ?? 1)
              }
            />
          ))}
        </div>
      </div>
      <div className="see-more">
        <p>
          See more{' '}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </span>
        </p>
      </div>
      <div className="empty-text-notice">
        <p>No characters found. Start typing to see letter density.</p>
      </div>
    </>
  );
}

export default LetterDensity;
