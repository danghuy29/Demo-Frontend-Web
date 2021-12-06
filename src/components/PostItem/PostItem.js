import React, { useState,useEffect } from 'react'
import DeleteModal from '../Modal/DeleteModal'
import { useSelector } from 'react-redux'
import { editPost } from '../../Redux/Action/Posts/PostsAction'
import { useDispatch } from 'react-redux'
export default function PostItem(props) {
    const [showButton, setShowButton] = useState(true)
    const [edit, setEdit] = useState(false)
    const [authorName,setAuthorName] = useState("")
    const [authorEmail,setAuthorEmail] = useState("")
    const userList = useSelector(state=>state.user)
    const [content, setContent] = useState({
        title: props.post.title,
        body: props.post.body
    })
    const [tempContent, setTempContent] = useState({
        title: props.post.title,
        body: props.post.body
    })
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const handleEditClick = () => {
        setShowButton(!showButton)
        setEdit(!edit)
    }
    const handleSubmitClick = () => {
        setShowButton(!showButton)
        setEdit(!edit)
        let temp = tempContent
        setContent(temp)
        let updatedPost = {
            ...props.post,
            title: temp.title,
            body: temp.body
        }
        dispatch(editPost(updatedPost))
    }
    const handleDeleteClick = () => {
        setShowModal(!showModal)
        document.body.style.overflow = 'hidden';

    }
    const handleOnchange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTempContent(prev => ({
            ...prev,
            [name]: value

        }))

    }
    const handleCloseModal = () => {
        setShowModal(!showModal)
        document.body.style.overflow = 'unset';

    }
    useEffect(() => {
        let [tempAuthor]= [...userList.filter((item)=>{
            return item.id===props.post.userId
        })]
   
        if(tempAuthor){
            setAuthorName(tempAuthor.name)
            setAuthorEmail(tempAuthor.email)
        }
    }, [userList, props.post.userId])
    if (edit) {
        return (
            <div className="col-12">
                <div className="bg-light mt-3 mb-3">
                    <div href="#" className="card-body text-dark">
                        <div className="img-section">
                        </div>
                        <div className="title-section">
                            <input type="text" name="title" className="card-title text-center p-3 form-control" defaultValue={content.title} onChange={(e) => handleOnchange(e)} />
                        </div>
                        <div className="content-section">
                            <textarea name="body" rows="10" className="form-control" defaultValue={content.body} onChange={(e) => handleOnchange(e)}></textarea>
                        </div>
                        <div className="author-section">
                            <p>Author: {authorName}</p>
                            <p>Email: {authorEmail}</p>
                        </div>
                        {
                            showButton ?
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-lg btn-block" onClick={handleEditClick}>Chỉnh Sửa Bài Viết</button>
                                    <button className="btn btn-danger btn-lg btn-block" onClick={handleDeleteClick}>Xóa Bài Viết</button>
                                </div> :
                                <div className="edit-btn">
                                    <button className="btn btn-warning btn-lg btn-block" onClick={handleSubmitClick}>Xác Nhận</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="col-12">
                <div className="bg-light mt-3 mb-3">
                    <div href="#" className="card-body text-dark">
                        <div className="img-section">
                        </div>
                        <div className="title-section">
                            <h4 className="card-title text-center  p-3">{props.post.title}</h4>
                        </div>
                        <div className="content-section">
                            <p>{props.post.body}</p>
                        </div>
                        <div className="author-section">
                            <p>Author: {authorName}</p>
                            <p>Email: {authorEmail}</p>
                        </div>
                        {
                            showButton ?
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-lg btn-block" onClick={handleEditClick}>Chỉnh Sửa Bài Viết</button>
                                    <button className="btn btn-danger btn-lg btn-block" onClick={handleDeleteClick}>Xóa Bài Viết</button>
                                </div> :
                                <div className="edit-btn">
                                    <button className="btn btn-warning btn-lg btn-block" onClick={handleSubmitClick}>Xác Nhận</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
            {showModal && <DeleteModal handleCloseModal={handleCloseModal} id={props.post.id}/>}
        </>
    )
}
