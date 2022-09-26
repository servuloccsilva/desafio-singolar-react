import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from "../Pages/Feed/feed"
import Details from "../Pages/Details/datails"
import EditPage from "../Pages/EditPage/edit"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path='/:postId' element={<Details/>}/>
                <Route path='/edit/:postId' element={<EditPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
