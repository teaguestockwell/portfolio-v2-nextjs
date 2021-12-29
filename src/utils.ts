const s = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

export const guid = () => `${s()}${s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`

// NOTE The functionality below (incl. TS types) will soon become part of Contentlayer itself. Please don't mind its existence. 😎

type ConvertUndefined<T> = OrUndefined<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K]
}>
type OrUndefined<T> = {[K in keyof T]: T[K] | undefined}
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[]
): ConvertPick<{[K in Keys]: Obj[K]}> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {} as any)
}
