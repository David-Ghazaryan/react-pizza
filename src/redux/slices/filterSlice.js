import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { type: '', name: 'All' },
    { type: 1, name: 'Meat' },
    { type: 2, name: 'Vegetarian' },
    { type: 3, name: 'Grill' },
    { type: 4, name: 'Spicy' },
    { type: 5, name: 'Closed' },
  ],
  sortOptions: [
    { type: 'rating', label: 'Rating (ASC)' },
    { type: '-rating', label: 'Rating (DESC)' },
    { type: 'price', label: 'Price (ASC)' },
    { type: '-price', label: 'Price (DESC)' },
    { type: 'title', label: 'Title (ASC)' },
    { type: '-title', label: 'Title (DESC)' },
  ],
  currentPage: 1,
  totalPages: 2,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryType(state, action) {
      state.categories[0].type = action.payload;
    },
    setSortType(state, action) {
      state.sortOptions[0].type = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryType, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
