const Loop = () => {
    let hobbiesList = ["Swimming", "Singing", "Dancing", "Reading books", "Coding"];
    return (
      <div style={{ textAlign: "left" }}>
        <h1>My hobbies are:</h1>
        <ul>
                  {hobbiesList.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                  ))}
        </ul>
      </div>
    );
  };
  
  export default Loop;