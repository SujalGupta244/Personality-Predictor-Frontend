
const useLink = () => {
    const baseURL = import.meta.env.VITE_API_URL
    const loginURL = import.meta.env.VITE_API_URL

    const api = 'api'
    
    return {baseURL, loginURL, api}
}

export default useLink