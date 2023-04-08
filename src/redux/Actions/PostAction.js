import axios from "axios"
import { ADD_NEW_POST, GET_ALL_POSTS, REMOVE_LOADING } from "../Constants/PostsConstant"
import { LOADING_EVENT_POST } from "../Constants/PostsConstant"
import { URL } from "../../App"
export const getAllPostsAction = () => async(dispatch) =>{
    dispatch({type:LOADING_EVENT_POST})
    try {
        const {data} =await axios.get(`${URL}/post/`)
          dispatch({type:GET_ALL_POSTS,payload:data})
    } catch (error) {
        throw error
    }
}


export const AddNewPostAction = (NewPost,settitle,setIsClickImage,IsClickImage) => async(dispatch) =>{

    try {
       const {data} = await axios.post(`${URL}/post/AddPost/`,NewPost)
       console.log(data)
        dispatch({type:ADD_NEW_POST,payload:data})
        settitle('')
        setIsClickImage(false)
    } catch (error) {
        throw error
    }
    getAllPostsAction()
}










