import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setBool] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   if(isDuplicate){
    alert("that name is taken. try another. ");
   }else{
      props.handleContact(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
     }
   
  };

  useEffect(() => {
    setBool(() => props.contacts.find(contact => contact.name === name));
   }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phoneNumber} setPhone={setPhoneNumber} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
