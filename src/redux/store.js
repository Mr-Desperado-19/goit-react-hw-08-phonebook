import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
