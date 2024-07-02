import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete
      </button>
    </>
  );
};

export default Contact;
