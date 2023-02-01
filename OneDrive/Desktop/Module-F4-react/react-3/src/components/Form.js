import { useState } from "react";

const Form = () => {
	// const [firstName, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")
  // const [city, setCity] = useState("")

	let [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		city: ''
	})

  return (
    <>
      <input
        type="text"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={(e) => setFormData({
					...formData,
					firstName: e.target.value
				})}
      />
			<br/>
      <input
        type="text"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={(e) => setFormData({
					...formData,
					lastName: e.target.value
				})}
      />
			<br/>
      <input
        type="text"
        placeholder="Enter your city"
        value={formData.city}
        onChange={(e) => setFormData({
					...formData,
					city: e.target.value
				})}
      />
    </>
  );
};

export default Form;