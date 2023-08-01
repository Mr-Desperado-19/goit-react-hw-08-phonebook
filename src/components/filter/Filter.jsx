import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import {
  StyledFilterTextWrap,
  StyledFiltrWrap,
  StyledInput,
} from './Filter.styled';
import { MdPersonSearch } from 'react-icons/md';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };
  return (
    <StyledFiltrWrap>
      <b>Find contacts by name</b>
      <StyledFilterTextWrap>
        <StyledInput
          type="text"
          value={filter}
          onChange={changeFilter}
          placeholder="Search name..."
        />
        <MdPersonSearch />
      </StyledFilterTextWrap>
    </StyledFiltrWrap>
  );
};
