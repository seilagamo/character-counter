interface BarProps {
  letter: string;
  count: number;
  percentage: number;
}

function Bar ({letter, count, percentage}: BarProps) {

  const p: string = (percentage * 100) === 100 ? "100%" : (percentage * 100).toFixed(2) + "%";
  return (
    <>
      <div className="letter">{letter}</div>
      <div className="bar">
        <div className="bar-inner"
             style={{width: `${percentage * 100}%`}}></div>
      </div>
      <div
        className="density-percentage">{count} ({p})
      </div>
    </>
  );
}

export default Bar;