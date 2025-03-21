import Bar from "./Bar.tsx";

const letterDensity = [
  {
    letter: 'E',
    count: 40,
    percentage: 16.06
  },
  {
    letter: 'I',
    count: 29,
    percentage: 11.65
  },
  {
    letter: 'T',
    count: 28,
    percentage: 11.24
  },
  {
    letter: 'O',
    count: 22,
    percentage: 8.84
  },
  {
    letter: 'N',
    count: 21,
    percentage: 8.43
  }
];

function LetterDensity () {

  return (
    <>
      <div className="density-container">
        <h2>Letter Density</h2>
        <div className="grid density-chart">
          {letterDensity.map((item) => (
            <Bar
              key={item.letter}
              letter={item.letter}
              count={item.count}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
      <div className="see-more">
        <p>See more <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="18" height="18"
                         viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    ><path
                      stroke="none" d="M0 0h24v24H0z" fill="none"/><path
                      d="M6 9l6 6l6 -6"/></svg>
                </span></p>
      </div>
      <div className="empty-text-notice">
        <p>No characters found. Start typing to see letter density.</p>
      </div>
    </>
  );
}

export default LetterDensity;