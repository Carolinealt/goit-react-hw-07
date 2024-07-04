import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      Phonebook
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
