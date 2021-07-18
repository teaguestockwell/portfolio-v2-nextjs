import {Svgs} from '../components/svgs'
import {Title} from '../components/title'

export default function Home() {
  return (
    <>
      <Title />
      <div style={{paddingTop: 70}}>
        {Svgs.dart()}
        {Svgs.flutter()}
        {Svgs.postgres()}
        {Svgs.prisma()}
        {Svgs.git()}
        {Svgs.typescript()}
        {Svgs.react()}
        {Svgs.docker()}
        {Svgs.javascript()}
        {Svgs.nextjs()}
        {Svgs.nodejs()}
        {Svgs.aws()}
        {Svgs.android()}
        {Svgs.firebase()}
        {Svgs.java()}
        {Svgs.jira()}
        {Svgs.sonarqube()}
        {Svgs.gitlab()}
        {Svgs.github()}
        {Svgs.vercel()}
        {Svgs.expressjs()}
        {Svgs.sql()}
        {Svgs.html5()}
        {Svgs.css3()}
      </div>
    </>
  )
}
