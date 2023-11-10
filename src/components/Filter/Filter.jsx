import {Div, Input} from './Filter.styled'
import { getFilter } from "../redux/selectors";
import {  changeFilter } from "../redux/filterSlice";
import { useSelector, useDispatch } from 'react-redux';



function Filter ()  {
 const onChange = event => {
   dispatch(changeFilter(event.target.value));
};
const dispatch = useDispatch();
  return (
    <Div>
      <h2>Contacts</h2>
      <Input
        type="text"
        placeholder="Find contact"
        name="filter"
        value={useSelector(getFilter)}
        onChange={onChange}
      />
    </Div>
  );
};
export default Filter;