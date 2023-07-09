import "./Form.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(null);

  //  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !department) {
      setMessage("Fields are required");
      return;
    }

    const formData = {
      userName: name,
      userAge: parseInt(age),
      userDepartment: department,
    };

    setFormData(formData);
    setMessage("");

    axios
      .post("http://localhost:3000/user", formData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // let buttonColor = isSubmitted ? "#ffffff" : "#000000";

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          id="user-name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          id="user-age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          id="user-department"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit" id="btn-submit">
          Submit
        </button>
      </form>
      <div className="text">
        {formData && (
          <>
            <p>Name: {formData.userName}</p>
            <p>Age: {formData.userAge}</p>
            <p>Department: {formData.userDepartment}</p>
          </>
        )}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Form;
