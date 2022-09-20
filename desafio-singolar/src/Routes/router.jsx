import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from "../Pages/Feed/feed"
import PostDetails from "../Pages/PostDetails/postDetails"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path='/:postId' element={<PostDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
