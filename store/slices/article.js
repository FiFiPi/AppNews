import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ArticleService from '../../services/article'

export const fetchArticleWithCategoryID = createAsyncThunk(
  'article/fetchArticleWithCategoryID',
  async (data, thunkAPI) => {
    const response = await ArticleService.list(data)
    return response.data
  }
)

export const fetchAllArticleWithCategoryID = createAsyncThunk(
  'article/fetchAllArticleWithCategoryID',
  async (data, thunkAPI) => {
    const response = await ArticleService.list(data)
    return response.data
  }
)
const ArticleSlice = createSlice({
  name: 'Article',
  initialState: {
    items: [],
    allItems: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleWithCategoryID.fulfilled, (state, action) => {
        state.items = [...action.payload, ...state.items]
      })
      .addCase(fetchArticleWithCategoryID.rejected, (state, action) => {
        console.log(action.error.message)
      })
      .addCase(fetchAllArticleWithCategoryID.fulfilled, (state, action) => {
        state.allItems = action.payload
      })
      .addCase(fetchAllArticleWithCategoryID.rejected, (state, action) => {
        console.log(action.error.message)
      })

  },
})

export const { } = ArticleSlice.actions
export default ArticleSlice.reducer