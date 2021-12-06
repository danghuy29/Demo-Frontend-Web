import React from 'react'
import HomePage from '../Pages/HomePage'
import AddPostPage from '../Pages/AddPostPage'
import { Route,Switch } from 'react-router-dom'

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route path="/home"><HomePage/></Route>
            <Route path="/add"><AddPostPage/></Route>
        </Switch>
    )
}
