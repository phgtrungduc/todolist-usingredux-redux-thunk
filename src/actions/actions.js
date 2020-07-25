import { ADD, DELETE, LOAD_DATA } from "../constant/constant.js"
import axios from "axios"

export const deleteList = (index) => {
    return {
        type: DELETE,
        payload: index
    }
}

export const addToList = (data) => {
    return {
        type: ADD,
        payload: data
    }
}
let loaddata = (data) => {
    return {
        type: LOAD_DATA,
        payload: data
    }
}
export const loadData = () => {
    return (dispatch) => {
        axios.get('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang')
            .then((response) => {
                dispatch(loaddata(response.data))
            })
            .catch((error) => {
                return {
                    type: LOAD_DATA,
                    payload: []
                }
            })
    }
}
export const addData = (data)=>{
    return (dispatch) => {
        axios.post('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang',{
            name:data,
            status:"false"
        })
            .then((response) => {
                dispatch(addToList(response.data))
            })
            .catch((error) => {
                dispatch(addToList({}))
            })
    }
}

export const deleteData = (index)=>{
    return (dispatch) => {
        axios.delete('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang/'+(index))
            .then((response) => {
                dispatch(deleteList(index))
                console.log("thành công")
            })
            .catch((error)=>{
                console.log("thất bại");
            })
    }
}

