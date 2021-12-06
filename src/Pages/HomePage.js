import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PostList from '../components/PostList/PostList'
export default function HomePage() {
    return (
        <div>
            <Header/>   
            <PostList/>
            <Footer/>
        </div>
    )
}
