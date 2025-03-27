import Card from './Card.tsx';

const cards = [
  {
    count: 278,
    name: 'Total Characters',
    type: 'character-count',
  },
  {
    count: 39,
    name: 'Word Count',
    type: 'word-count',
  },
  {
    count: 4,
    name: 'Sentence Count',
    type: 'sentence-count',
  },
];

function CardContainer() {
  return (
    <div className="card-container flex">
      {cards.map((card) => (
        <Card key={card.type} description={card.name} type={card.type} />
      ))}
    </div>
  );
}

export default CardContainer;
