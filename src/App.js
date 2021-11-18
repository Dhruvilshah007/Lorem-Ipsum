import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //function
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount =parseInt(count);
    // console.log(typeof amount) blue color outputmeans number and black color means string
    // console.log("hello world");
    //passig all data into setText
    // console.log(count)
    // console.log(typeof count)
    if(count<=0){
      amount=1
    }
    if(count>8){
      amount=8
    }

    //end value is not included

    setText(data.slice(0,amount));
    // console.log(text)
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem ipsum? </h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          //as i am changing value i want to also change my state value

          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {/* iterating through each and every paragraph index and displaying it */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
