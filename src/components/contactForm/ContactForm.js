import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

const setState = {
  name: setName,
  phone: setPhone,
  email: setEmail
}

function handleChange({target}){
  const input = target.name;
  setState[input](target.value);
  console.log("name: " + name + " phone: " + phone + " email: " + email)
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <br />
      <input type="text" id="name" name="name" pattern="[a-zA-Z]{3,}" value={name} onChange={handleChange}/>
      <br />
      <label htmlFor="phone">phone number:</label>
      <br />
      <input type="tel" id="phone" name="phone" pattern="05[\d]{1}[\d]{7}" value={phone} onChange={handleChange}/>
      <br />
      <label htmlFor="email">email:</label>
      <br />
      <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={handleChange}/>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
