import {useState} from 'react';

function Square ({value}) {

  return 
  <button className="square">{value}</button>
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
    <div className = "board-row">
    <Square value = {squares[0]} />
    <Square value = {squares[1]} />
    <Square value = {squares[2]} />
     </div>
    <div className = "board-row">
    <Square value = {squares[3]} />
    <Square value = {squares[4]}/>
    <Square value = {squares[5]}/>
    </div>
    <div className = "board-row">
    <Square value = {squares[6]} />
    <Square value = {squares[7]} />
    <Square value = {squares[8]} />
    </div>
    </>
  ); 
}

// adding conditionals to a component
function Item (name, isPacked) {
  if (isPacked) {return 
    <li className = "item">{name}  ✔</li>;
  } return <li className = "item">{name}</li>;
}

export default function PackingList () {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item is Packed = {true}
        name = "Space suit" 
        />

        <Item is Packed = {true}
        name = "Helment with a golden leaf" />

        <Item isPacked = {false}
        name = "photo of Tam" 
        />"
      </ul>
    </section>
  )
}

// the conditional statement in React can also be written with  (ternary) operator (? :)

return (
  <li className = "item">
    {isPacked ? name + " ✔" : name}
  </li>
);