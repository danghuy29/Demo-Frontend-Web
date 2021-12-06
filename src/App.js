import './App.css';
import { useEffect } from 'react';
import { fetchPost } from './Redux/Action/API/FetchPosts/FetchPostsAction';
import { useDispatch } from 'react-redux';
import { fetchUser } from './Redux/Action/API/FechtUser/FetchUserAction';
import Routing from './Router/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("post") === null) {
      dispatch(fetchPost())
    }
  }, [dispatch])
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      dispatch(fetchUser())
    }
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
