import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home  />
    },
    {
        path:"/explore",
        element:'explore component'
    },
    {
        path:'/notifications',
        element:'bildirimler componenti'
    }
])

export default routes