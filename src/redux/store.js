import { createStore } from 'redux'

const initState = {
  data:[],
  tan: false,
  username: '',
  denglu: false,
  yonghu:[],
  deit:'',
  shangpin:[]
}

const rootReducer = ( state = initState, action ) => {
  switch (action.type) {
    case 'UPDATA_TAN':
      return {...state,tan: action.path}
    case 'ADD_DATA':
      return {...state,shangpin: action.path}
    case 'UPDATA_USERNAME':
      return {...state,username: action.pathsan}
    case 'UPDATA_DENGLU':
      return {...state,denglu: action.path}
    case 'UPDATA_DATA':
      return {...state,data:[...state.data,action.path]}
    case 'UPDATA_DATA_SUAN':
      return {...state,data: action.path}
    case 'UPDATA_YONGHU':
      return {...state,yonghu: action.path}
    case 'ADD_YONGHU':
      return {...state,yonghu: [...state.yonghu,action.data]}
    case 'UPDATA_DEIT':
      return {...state,deit: action.pather}
    case 'GAI_DATA':
      return {...state,data: ""}
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
