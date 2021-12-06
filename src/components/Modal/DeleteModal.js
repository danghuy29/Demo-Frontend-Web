import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../Redux/Action/Posts/PostsAction'
export default function DeleteModal(props) {
    const dispatch = useDispatch()
    const handleSubmitDelete=()=>{
        dispatch(deletePost(props.id))
        props.handleCloseModal()
    }
    const handleCancle=()=>{
        props.handleCloseModal()
    }
    return (
      <div className="modal">
         <div className="modal__body">
             <h4 className="text-center">BẠN XÁC NHẬN MUỐN XÓA POST NÀY?</h4>
         <div className="btn-group">
             <button className="btn btn-primary btn-lg" onClick={handleSubmitDelete}>XÁC NHẬN</button>
            <button className="btn btn-danger btn-lg" onClick={handleCancle}>HỦY BỎ</button>
        </div> 
         </div>
      </div>
    )
}
