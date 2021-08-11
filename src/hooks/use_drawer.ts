import create from 'zustand'
import {combine} from 'zustand/middleware'

export const useDrawerStore = create(
  combine(
    {
      isOpen: false,
    },
    (set) => ({set})
  )
)
