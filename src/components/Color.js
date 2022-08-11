import { useState } from 'react'

const ColorComp = () => {
  const [textColor, setTextColor] = useState("Green");

  //TexColor is our Getter (Const Variable)
  // SetTextColor os our Setter (function) that updates textColor

  console.log('textColor -> ', textColor);

  return (
    // only JSX ALLOWED

    <div className='App'>
      {/**Only more JSX allowed */}
      <header>
        <h1 style={{ color: textColor }}>My Favorite Color is {textColor}</h1>
        <button onClick={() => setTextColor("Blue")}>Blue</button>
        <br />
        <button onClick={() => setTextColor("Red")}>Red</button>
        <br />
        <button onClick={() => setTextColor("Green")}>Green</button>
       </header>
    </div>
  )
}

export default ColorComp

