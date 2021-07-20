import {IconCards} from '../components/icon_cards'
import {ThemeButton} from '../hooks/use_theme'
import {Content} from '../components/content'
import {v4} from 'uuid'

export default function Home() {
  return (
    <>
      <Content>
        <IconCards key={v4()} />
        <> </>
      </Content>
    </>
  )
}
