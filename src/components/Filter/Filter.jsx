import { Div, Input } from './Filter.styled';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Div>
      <h2>Contacts</h2>
      <Input
        type="text"
        id='filter'
        placeholder="Find contact"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Div>
  );
}
export default Filter;
