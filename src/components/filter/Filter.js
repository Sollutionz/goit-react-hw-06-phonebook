import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors';
import { changeFilter } from 'store/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);


  const onChange = ({ currentTarget: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <p className={css.descrip}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      />
    </>
  );
};


