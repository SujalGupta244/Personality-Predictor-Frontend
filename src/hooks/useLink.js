
const useLink = () => {
    const baseURL = import.meta.env.VITE_API_URL

    const api = 'api'
    
    return {baseURL, api}
}

export default useLink