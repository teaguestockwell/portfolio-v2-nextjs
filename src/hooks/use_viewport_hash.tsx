import {UseInViewport} from './use_in_viewport'
import debounce from 'lodash/debounce'

const handle = debounce((hash: string) => {
  if (!window.location.hash.includes(hash)) {
    location.hash = hash
  }
}, 500)

export const UseViewPortHash = ({hash}: {hash: string}) => {
  return <UseInViewport cb={(inView) => (inView ? handle(hash) : () => {})} />
}
