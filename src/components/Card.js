import { useState } from 'react';
import { useSelector } from 'react-redux';

function Card() {

  const frameworks = useSelector(state => state.cards.frameworks);

  function shuffleFramework(frameworks) {
    let randomFrameworks = [];
    let newArray = [...frameworks, ...frameworks];
    let randomized = newArray
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    
    randomized.map((name) => (
      randomFrameworks.push({
        name: name,
        close: true,
        matched: false,
      })
    ))
    return randomFrameworks;
  }
  const [randomized, setRandomized] = useState(shuffleFramework(frameworks));
  const [openCount, setOpenCount] = useState(0);

  console.log(randomized)


  const handleChangeFace = (index) => {
    if(openCount < 2) {
      setRandomized(randomized.map((card,i) => 
        i === index ? { ...card, close: false } : card
      ));
    }
    setOpenCount(openCount+1);
    
  }

  return (
    <div className='game_continer'>
      <div className='card_container'>
        {
          randomized.map((framework, index) => (
            <div key={index} className={"card" + (!framework.close ? ' opened' : '')} onClick={() => handleChangeFace(index)}>
              <div className='front'>
                ?
              </div>
              <div className='back'>
                <img src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework.name}.png`} alt={framework.name} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card