import {IconCards} from '../components/icon_cards'
import {Svgs} from '../components/svgs'
import {ThemeButton, useTheme} from '../hooks/use_theme'

export default function Home() {
  useTheme((s) => s.theme.name)
  const svgs = Svgs(48)

  return (
    <>
      <IconCards />
      <ThemeButton />
    </>
  )
}
