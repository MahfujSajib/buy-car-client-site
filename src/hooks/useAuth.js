import { useContext } from "react"
import { authContext } from "../context/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(authContext)
    return auth;
}
export default useAuth