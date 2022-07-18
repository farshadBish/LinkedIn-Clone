import "../style/PostList.css"
import Post from './Post'
import {useParams} from 'react-router-dom'
import { useDispatch } from "react-redux/es/exports"
import { useEffect } from "react"
import { getAllPostsActionWithThunk } from "../redux/actions"

const PostList = () => {
 const dispatch =  useDispatch()
  let id = useParams()._id  

  useEffect(()=> {
    dispatch(getAllPostsActionWithThunk())
  },[])
  return (
        <div className='post-list'>
          <Post />
        </div>
    )
}

export default PostList