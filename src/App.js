import React, { useState } from "react";
import data from "./data";
function App() {
  const [Count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    let amount  = parseInt(Count)
    e.preventDefault();
    if (Count < 0 ) {
      setText(data.slice(0,1))

    }
    setText(data.slice(0,amount))
  };

  return (
    <section className="section-center">
      <h3>Tires of boring lorem ipsum?</h3>

      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={Count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="Submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item,index) => {
           return <p key={index}>{item}</p>
        })}

      </article>
    </section>
  );
}

export default App;
