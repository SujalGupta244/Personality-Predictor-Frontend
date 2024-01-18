import { create } from 'zustand'

const useStore = create((set) => ({
  token: '',
  addToken: (val) => set((state) => ({ token: val })),
  // removeToken: () => set({ bears: '' }),
}))

export default useStore