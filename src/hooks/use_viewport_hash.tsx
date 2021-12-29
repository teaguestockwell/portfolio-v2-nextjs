import {UseInViewport} from './use_in_viewport'
import debounce from 'lodash/debounce'

let lastHash: string

const handle = debounce((hash: string) => {
  if (!window.location.hash.includes(hash)) {
    lastHash = window.location.href.split('#')[1]
    if (window.location.href.split('#')[1] === lastHash) {
      history.replaceState(
        null,
        '',
        location.protocol + '//' + location.host + '/#' + hash
      )
    }
  }
}, 500)

export const UseViewPortHash = ({hash}: {hash: string}) => {
  return <UseInViewport cb={(inView) => (inView ? handle(hash) : () => {})} />
}
