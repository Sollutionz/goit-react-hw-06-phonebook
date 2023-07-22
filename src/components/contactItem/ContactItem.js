import PropTypes from 'prop-types';
import css from './ContactsItem.module.css'
import { useContext } from 'react';
import { Context } from 'components/App';

export const ContactItem = ({ name, number, id}) => {
  const context = useContext(Context);
  return (
    <>
      <span className={css.item}>
        {name}: {number}
      </span>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => context(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}
