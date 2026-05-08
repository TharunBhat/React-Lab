import React, { useState } from "react";
import DOMPurify from "dompurify";
import "./App.css";

export default function App() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {

    let err = {};

    if (!data.name)
      err.name = "Name required";

    if (!/\S+@\S+\.\S+/.test(data.email))
      err.email = "Invalid email";

    if (data.password.length < 6)
      err.password = "Minimum 6 characters";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: DOMPurify.sanitize(
        e.target.value.trimStart()
      )
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      setSubmitted(data);
    }
  };

  return (

    <div className="container">

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        <p>{errors.name}</p>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        <p>{errors.email}</p>

        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className={errors.password ? "error" : ""}
        />
        <p>{errors.password}</p>

        <label>
          <input
            type="checkbox"
            onChange={() => setShow(!show)}
          />
          Show Password
        </label>

        <button type="submit">Submit</button>

      </form>

      {submitted && (

        <div className="output">

          <h3>Submitted Data</h3>

          <p>
            <b>Name:</b> {submitted.name}
          </p>

          <p>
            <b>Email:</b> {submitted.email}
          </p>

          <p>
            <b>Password:</b> {submitted.password}
          </p>

        </div>
      )}

    </div>
  );
}
