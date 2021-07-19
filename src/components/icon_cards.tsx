import {IconCard} from './icon_card'
import {Svgs} from '../components/svgs'

export const IconCards = () => {
  const svgs = Svgs(48)

  return (
    <>
      <IconCard title="Languages">
        {svgs.typescript}
        {svgs.javascript}
        {svgs.dart}
        {svgs.java}
        {svgs.html5}
        {svgs.css3}
      </IconCard>

      <IconCard title="Frontend">
        {svgs.reactjs}
        {svgs.flutter}
        {svgs.android}
      </IconCard>

      <IconCard title="Backend">
        {svgs.nodedotjs}
        {svgs.express}
        {svgs.nextdotjs}
        {svgs.prisma}
      </IconCard>

      <IconCard title="Services">
        {svgs.amazonaws}
        {svgs.postgresql}
        {svgs.firebase}
        {svgs.nginx}
      </IconCard>

      <IconCard title="Workflow">
        {svgs.docker}
        {svgs.git}
        {svgs.jira}
        {svgs.github}
        {svgs.gitlab}
        {svgs.sonarqube}
        {svgs.vercel}
      </IconCard>
    </>
  )
}
