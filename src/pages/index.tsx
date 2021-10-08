import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChalenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Styles from '../styles/pages/Home.module.css'


export default function Home() {
  return ( 
    <div className={Styles.container}>
      <ExperienceBar />

      <section>
        <div className="right">
          <Profile/>
          <CompletedChalenges/>
          <Countdown/>
        </div>
        <div className="left">
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
  