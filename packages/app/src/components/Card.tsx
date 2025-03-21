interface  CardProps {
  count: number
  description: string
  type: string
}

function Card ({count, description, type} : CardProps) {
  return (
      <div className={`card ${type}`}>
        <p className="count">{count}</p>
        <p className="counter-name">{description}</p>
      </div>
  )
}

export default Card;