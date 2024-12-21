import { useContext } from "react"
import { AuthContext } from "../Shared_Context/AuthProvider"

export const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}