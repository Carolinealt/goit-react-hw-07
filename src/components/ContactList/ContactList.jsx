import clsx from "clsx";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
const ContactList = () => {
  const contactsList = useSelector((state) => {
    console.log('state :>> ', state);
    return state.contacts.items;
  });
  const filterValue = useSelector((state) => {
    return state.filter;
  });

  const filteredContacts =
    filterValue !== ""
      ? contactsList.filter((contact) =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contactsList;

  return (
    <>
      <ul className={clsx(css.list)}>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={clsx(css.listItem)}>
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
