import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/category'
import SettingSliceReducer from './slices/setting'
import articleReducer from './slices/article'
import priceReducer from './slices/price'

const store = configureStore({
  reducer:{
    Category : categoryReducer, 
    Article  : articleReducer,
    Setting  : SettingSliceReducer,
    Price    : priceReducer
  }
})

export default store