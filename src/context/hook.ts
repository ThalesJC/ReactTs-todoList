import { useContext } from "react"
import MyContext from './myContext'

export const useContextHook = () => {
    return useContext(MyContext)
}