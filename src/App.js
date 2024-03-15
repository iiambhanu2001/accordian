import data from "./data";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  function handleclick(questionid) {
    setSelected(questionid === selected ? null : questionid);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div onClick={() => handleclick(dataitem.id)} className="title">
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataitem.id ? (
                <div className="content">{dataitem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found!</div>
        )}
      </div>
    </div>
  );
}

export default App;
