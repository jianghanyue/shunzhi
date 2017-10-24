import { createStore } from 'redux'

const initState = {
  data:[],
  tan: false,
  username: '',
  denglu: false,
  yonghu:[
    {
      name: "666",
      deit: "addsad",
      img: "http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
      id: 4,
      haoyoudongtai: [
        {
          "text": "好吃",
          name: "45hfghg",
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
          id: 1
        }
      ],
      firend: [
        {
          name: "dwada"
        },
        {
          name: "45hfghg"
        }
      ]
    },
    {
      name: "45hfghg",
      img: "http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
      deit: "还没有填写个性签名",
      haoyoudongtai: [
        {
          "text": "好吃",
          name: "666",
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
          id: 1
        },
        {
          "text": "84645",
          name: "666",
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
          id: 2
        },
        {
          "text": "adfsfsa4524",
          name: "666",
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
          id: 3
        }
      ],
      firend: [
        {
          name: "666"
        }
      ],
      id: 5
    },
    {
      name: "hdgfdgfd",
      img: "http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
      deit: "还没有填写个性签名",
      firend: [
        {
          name: "666"
        }
      ],
      haoyoudongtai: [],
      id: 6
    },
    {
      name: "dvdsvdscds",
      img: "http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
      deit: "还没有填写个性签名",
      firend: [
        {
          name: "666"
        }
      ],
      haoyoudongtai: [],
      id: 7
    },
    {
      name: "爱德华",
      img: "http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
      deit: "还没有填写个性签名",
      firend: [],
      haoyoudongtai: [],
      id: 8
    }
  ],
  deit:'',
  shangpin:[
    {
      name: "黑森林",
      address: "这是一个蛋糕",
      jiage: 10,
      poster: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
      completed: false,
      shuliang: 1,
      pinglun: [
        {
          text: "666",
          name: "666",
          id: 1
        },
        {
          text: "dsadsadas",
          name: "666",
          id: 2
        },
        {
          text: "saddsasac",
          name: "666",
          id: 3
        },
        {
          text: "adfsfsa4524",
          name: "666",
          id: 4
        }
      ],
      id: 20
    },
    {
      name: "草莓蛋糕",
      address: "这是一个蛋糕",
      jiage: 10,
      poster: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
      completed: false,
      shuliang: 1,
      pinglun: [],
      id: 21
    },
    {
      name: "提拉米苏",
      address: "这是一个蛋糕",
      jiage: "30",
      poster: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg",
      completed: false,
      shuliang: 1,
      pinglun: [
        {
          text: "好吃",
          name: "666",
          id: 1
        },
        {
          text: "84645",
          name: "666",
          id: 2
        }
      ],
      id: 22
    }
  ]
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
