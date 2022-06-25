import {createSlice } from '@reduxjs/toolkit'
const SettingSlice = createSlice({
  name: 'Setting',
  initialState:{
    home:[
        {id: 1, type: 'column', status: true},
        {id: 2, type: 'grid', status: true},
        {id: 3, type: 'column', status: true}
    ]
  },
  reducers: {
    SettingHome : (state, action) =>{
      let {id, type, status} = action.payload
      if(!type) type = 'grid'
      const item = state.home.find(item => item.id === id)
      if(item){
        state.home = state.home.filter(item =>{
          if(item.id == id){
            item.type    = type
            item.status  = status
          }
          return item
        })
      }else{
        if(!action.payload.type) action.payload.type = 'grid'
        state.home = [...state.home,action.payload]
      }
      console.log(state.home)
    }
  },
})

export const { SettingHome} = SettingSlice.actions
export default SettingSlice.reducer
