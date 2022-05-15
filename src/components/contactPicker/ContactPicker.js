import React from "react";

export const ContactPicker = (props) => {

  function handleChange({target}){
    props.setContact(target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="" name="contact" key={0}>please select</option>
      {
        props.contacts.map((contact, index) => {
            return <option value={contact.name} key={index + 1} name="contact">{contact.name}</option>
          }
        )
      }
    </select>

  );
};
