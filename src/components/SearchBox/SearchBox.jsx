import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        placeholder="to find..."
        className={css.input}
      />
    </>
  );
};

export default SearchBox;
