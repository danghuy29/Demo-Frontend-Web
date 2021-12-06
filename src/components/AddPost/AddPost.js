import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { addPost } from '../../Redux/Action/Posts/PostsAction';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
export default function AddPost() {
  const [newPost,setNewPost] = useState({
    userId:0,
    title:'',
    body:'',
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const handleTextChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setNewPost(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const handleOptionChange = (e) => {
    let name = e.target.name
    let value = Number(e.target.value)
    setNewPost(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(newPost.userId&&newPost.title&&newPost.body){
     if(window.confirm('Bạn có chắc chắn tạo bài viết này không?')){
      dispatch(addPost(newPost))
      setNewPost({
        userId:0,
        title:'',
        body:'',
      })
      history.push('/home')
     }
    }
  
  }
  let author = useSelector(state => state.user)
  return (
    <div className="add-post">
      <div className="container">
        <div className="card-body">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
              <label >Tiêu đề bài viết</label>
              <input type="text" name="title" className="card-title p-3 form-control" placeholder="Nhập tiêu đề ở đây" onChange={(e) => handleTextChange(e)} required/>
            </div>
            <div className="form-group">
              <label >Nội dung bài viết</label>
              <textarea name="body" rows="8" className="form-control" placeholder="Nhập nội dung bài viết ở đây" onChange={(e) => handleTextChange(e)} required></textarea>
            </div>

            <div className="form-group">
              <label >Tác giả</label>
              <select className="custom-select" name="userId" onChange={(e)=>handleOptionChange(e)} required>
                 <option hidden value="">Tác giả...</option>
                {
                  author.map((item,index) =><Author key={index} user={item}/>)
                }

              </select>
            </div>
            <input type="submit" className="btn btn-primary btn-block" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  )
}

const Author = (props) => {
  return(
    <>
      <option value={props.user.id}>{props.user.name}</option>
    </>
  )
}
