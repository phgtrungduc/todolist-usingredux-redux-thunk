import { ADD, DELETE, LOAD_DATA } from "../constant/constant.js"
const initState = {
    listCategory: []  //chứa tất cả các hoạt động trong to do list 
}


const reducers = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return {
                // ...state,list:state.list.push(action.payload) 
                ...state, listCategory: [...state.listCategory, action.payload]
            }

        case DELETE:
            return {
                ...state, listCategory: state.listCategory.filter((value, index) => value.id !== action.payload)
            }
            
        case LOAD_DATA: {
            return {
                ...state, listCategory: [...action.payload]
            }
        }
        default:
            return state;
    }
}
export default reducers;