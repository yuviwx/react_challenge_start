import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function handleContact(name, phoneNumber, email){
    setContacts(prev => [...prev, {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    }])
    console.log(contacts)
  }

  function handleAppointment(title, contact, date, time){
    
    setAppointments(prev => [...prev, {
      title: title,
      contact: contact,
      date: date,
      time: time
    }])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} handleContact={handleContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} handleAppointment={handleAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
