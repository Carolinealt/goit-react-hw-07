import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      phonebook
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
