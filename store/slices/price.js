import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PriceService from '../../services/price'

export const fetchPriceGold = createAsyncThunk(
  'gold/fetchPriceGold',
  async (Params, thunkAPI) => {
    const response = await PriceService.getGold()
    return response.data
  }
)

export const fetchPriceCoin = createAsyncThunk(
  'coin/fetchPriceCoin',
  async (Params, thunkAPI) => {
    const response = await PriceService.getCoin()
    return response.data
  }
)

const PriceSlice = createSlice({
  name: 'Price',
  initialState:{
    Gold:[],
    Coin:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchPriceGold.fulfilled, (state, action) => {
            state.Gold = action.payload
        })
        .addCase(fetchPriceGold.rejected, (state, action) => {
            console.log(action.error.message)
        })
        .addCase(fetchPriceCoin.fulfilled, (state, action) => {
            state.Coin = action.payload
        })
        .addCase(fetchPriceCoin.rejected, (state, action) => {
            console.log(action.error.message)
        })
    },
})

export const { } = PriceSlice.actions
export default PriceSlice.reducer
