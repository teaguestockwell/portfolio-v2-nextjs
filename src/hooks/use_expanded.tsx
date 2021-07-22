import create, {State} from 'zustand'

interface Props {
  expanded: {[key: string]: boolean}
  setExpanded: (key: string, expanded: boolean) => void
}

export const useExpanded = create<State & Props>((set) => ({
  expanded: {},
  setExpanded: (key, expanded) =>
    set((s) => {
      s.expanded[key] = expanded
    }),
}))

export const useExpandedAtKey = (key: string) =>
  useExpanded((s) => s.expanded[key])
