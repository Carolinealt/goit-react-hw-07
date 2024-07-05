import clsx from "clsx";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={clsx(css.list)}>
        {contactsList.map((contact) => {
          return (
            <li key={Math.random()} className={clsx(css.listItem)}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
