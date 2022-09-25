import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from "../Pages/Feed/feed"
import Details from "../Pages/Details/datails"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path='/:postId' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
