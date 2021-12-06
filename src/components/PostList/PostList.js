import React from 'react'
import PostItem from '../PostItem/PostItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function PostList() {
    return (
        <div id="post__lists" style={{ backgroundColor: "#dcdcdc" }}>
            <h2 className="text-center"> DANH SÁCH CÁC BÀI VIẾT</h2>
            <Link to="/add" type="button" className="btn btn-primary add--btn text-center">THÊM BÀI VIẾT MỚI</Link>
            <div className="container">
                <div className="row">
                    <RenderPost />
                </div>
            </div>

        </div>
    )
}
const RenderPost = () => {
    let fetchPost = useSelector(state => state.fetchPost)
    let fetchUser = useSelector(state => state.fetchUser)
    let postList = useSelector(state => state.post)
    if (fetchPost.loading && fetchUser.loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (fetchPost.err.message) {
        return (
            <div className="error__section">
                <h1>Không load được dữ liệu bài viết</h1>
                <h1>{fetchPost.err.message}</h1>
            </div>
        )
    }
    if (fetchUser.err.message) {
        return (
            <div className="error__section">
                <h1>Không load được dữ liệu các tác giả</h1>
                <h1>{fetchUser.err.message}</h1>
            </div>
        )
    }
    return (
        <>
            {
                postList.map((item, index) => <PostItem key={index} post={item} />)
            }
        </>
    )
}