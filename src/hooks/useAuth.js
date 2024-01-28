import {jwtDecode} from 'jwt-decode'
import useStore from './useStore'

const useAuth = () => {
    const {token} = useStore()

    if(token !== ''){
        const decode = jwtDecode(token)
        const {username, email} = decode
        
        return {username, email}
    }

  return {username: '', email : ''}
}

export default useAuth