interface BarProps {
  letter: string;
  count: number;
  percentage: number;
}

function Bar ({letter, count, percentage}: BarProps) {
  return (
    <>
      <div className="letter">{letter}</div>
      <div className="bar">
        <div className="bar-inner" style={{width:'{percentage}'}}></div>
      </div>
      <div className="density-percentage">{count} ({percentage}%)</div>
    </>
  );
}

export default Bar;