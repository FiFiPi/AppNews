import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CategoryService from '../../services/category'
export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async (data, thunkAPI) => {
    const response = await CategoryService.list(data)
  
    return response.data
  }
)
const CategorySlice = createSlice({
  name: 'Category',
  initialState:{
    items:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.items = action.payload
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        console.log(action.error.message) 
      })
  },
})

export const { } = CategorySlice.actions
export default CategorySlice.reducer