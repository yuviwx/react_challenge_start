import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const setState = {
    title: setTitle,
    date: setDate,
    time: setTime,
    contact: setContact
  }
  
  function handleChange({target}){
    const input = target.name;
    setState[input](target.value);
    console.log("name: " + title + " phone: " + date + " email: " + time + "contact: " + contact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title:</label>
      <br />
      <input type="text" id="title" name="title" value={title} onChange={handleChange} required/>
      <br />
      <label htmlFor="date">date</label>
      <br />
      <input type="date" id="date" name="date" min={getTodayString()} value={date} onChange={handleChange} required/>
      <br />
      <label htmlFor="time">time:</label>
      <br />
      <input type="time" id="time" name="time" value={time} onChange={handleChange} required/>
      <br />
      <label htmlFor="contacts">contacts:</label>
      <br />
      <ContactPicker contacts={contacts} setContact={setContact} required/>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
