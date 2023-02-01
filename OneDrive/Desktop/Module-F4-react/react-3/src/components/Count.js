import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  let style = {
    countStyle: { fontSize: "10em", margin: 0 },
    buttonStyle: {
      fontSize: "1.2em",
      padding: "10px",
      borderRadius: "10px",
      margin: "5px",
    },
  };

	const increment = () => {
		setCount((prevCount) =>  prevCount + 1)
	}

	const increment5 = () => {
		increment()
		increment()
		increment()
		increment()
		increment()
	}

	const decrement = () => {
		setCount(count - 1)
	}

  return (
    <>
      <p style={style.countStyle}>{count}</p>
			<button style={style.buttonStyle} onClick={increment}>Increment</button>
			<button style={style.buttonStyle} onClick={increment5}>Increment 5</button>
			<button style={style.buttonStyle} onClick={decrement}>Decrement</button>
    </>
  );
};

export default Count;