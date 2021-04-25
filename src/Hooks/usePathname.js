import {useLocation} from "react-router-dom"

const usePathname=()=>{
    const location=useLocation();
    console.log(location)
    return location.pathname;
}

export default usePathname

