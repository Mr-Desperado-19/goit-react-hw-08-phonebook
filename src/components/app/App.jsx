import { useSelector } from 'react-redux';
import { ContactList } from '../contacts/ContactList';
import { ContactForm } from '../contactForm/ContactForm';
import { Filter } from '../filter/Filter';
import { StyledLayout } from '../layout/Layout.styled';

import {
  StyledPhonebookWrap,
  StyledContactsTitle,
  StyledTitle,
  StyledTitleWrap,
} from './App.styled';
import { FaBook } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from '../loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <StyledLayout>
      <StyledPhonebookWrap>
        <StyledTitleWrap>
          <StyledTitle>Phonebook</StyledTitle>
          <FaBook />
        </StyledTitleWrap>

        <ContactForm />
        <StyledTitleWrap>
          <StyledContactsTitle>Contacts</StyledContactsTitle>
          <IoMdContacts />
        </StyledTitleWrap>

        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>Something went wrong, try again!</p>}
        <ContactList />
      </StyledPhonebookWrap>
    </StyledLayout>
  );
};