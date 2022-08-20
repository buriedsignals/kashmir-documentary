// Styles
import { AboutTemplateStyle } from "./index.style"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"

export default function AboutTemplate() {
  // Store
  const backgroundImage = useStore((s) => s.backgroundImage)
  return (
    <AboutTemplateStyle>
      <FrameModule noBottom={ true } backgroundImage={ `./images/${ backgroundImage }` }>
        <div className="content-about">
          <div className="content-about-container">
            <h1 className="title">Historical Timeline</h1>
            <p className="description">An overview of events in Kashmir.</p>
            <p className="sub-description">
            Kashmir emerged as an “international dispute” in 1947 but looking at the Kashmir question exclusively from the prism of 1947 privileges India-Pakistan state-centric perspectives while erasing Kashmir’s own distinct political history. To begin to understand the Kashmiri aspiration for self-determination, it is important to trace the major events that have shaped Kashmiri political subjectivity. Kashmir’s political history is a complex and volatile interaction between external forces and internal struggles. Keeping this in mind, I present this timeline as a resource for those curious about what drives the Kashmiri movement for self-determination despite the tremendous odds it faces. To be clear, the timeline is not the history of Kashmir, but a chronicle of key political events—and in being so, the timeline falls squarely within the long tradition of Kashmiri chronicle writing. I start with the year 1586 because many Kashmiris see the arrival of Mughals as the first tragic entanglement of Kashmir with South Asia.</p>
            <p className="description">1586</p>
            <p className="sub-description">Apart from the brief periods, when it was under the influence of the Mauryas (~ 300 B.C.) and later under the rule of the Kushans (~130 A.D.), Kashmir had remained more or less independent under a series of regional dynasties, including Hindu-Buddhist Karkotas and Muslim Shah-Miris. The centuries of complex interaction between indigenous peoples of Kashmir and Aryan settlers, and later preachers from South India, Central Asia and Iran, had led to mass conversions to Buddhism, Shaivism, and eventually Islam. In 1586, Mughal Emperor Akbar attempts conquest of Kashmir, but is thwarted by the last native Kashmiri Muslim rulers Yusuf Shah Chak and his son Yaqub. Under the pretext of negotiations, Akbar takes Chak as a prisoner and eventually makes Kashmir a part of his Afghan principality in 1589. Never allowed to return to Kashmir, Chak’s grave is in present-day Indian state of Bihar.</p>
            <p className="description">1750s - 1846</p>
            <p className="sub-description">As Mughal empire weakens, Kashmir first falls under the Afghans Durranis in 1747 and then under the Sikhs from Lahore 1819.</p>
            <p className="description">1846</p>
            <p className="sub-description">In the aftermath of Anglo-Sikh wars in the 1840s, the British East India Company rewards a Dogra chieftain, Gulab, who had betrayed his Sikh overlords during the war, with control over Kashmir. Signed on 9 March 1846, the Treaty of Amritsar allows Gulab to claim the title of Maharaja of the state of Kashmir, which now includes Jammu and the kingdom of Ladakh that had been incorporated into the previous Sikh empire in 1808 and 1834 respectively. In return, Gulab agrees to serve British interests as a buffer state (primarily against the Tsarist Russia) and send Kashmiri soldiers to join British campaigns as and when called upon. A brief rebellion against the treaty by the Sikh-appointed Muslim governor of Kashmir Imam-ud-Din is suppressed. Despite most of their subjects being Muslim, Dogras turn the state into a Hindu kingdom. Except for the period from 1889 and 1905, when the British curtailed some Dogra powers, the Dogra maharajas enjoyed almost full sovereignty over Kashmir. Dogra rule is marked by oppression, forced labor, and heavy taxation. Several artisans’ revolts have been forcibly put down. In particular, the Kashmiri Muslims, who form the majority of the state’s subjects, are systematically impoverished, disempowered and exploited, while the minority upper-caste Hindus become part of the ruling establishment. </p>
            <p className="description">1931</p>
            <p className="sub-description">On 13 July, during the trial of Abdul Qadeer, who is accused of inciting Kashmiris to rebel against the Dogras, people assemble in the capital Srinagar. The Dogra troops shoot 22 Kashmiris dead. Widespread protests erupt all over the country against Maharaja Hari Singh, but the revolt is brutally suppressed. Dozens of Kashmiris are shot dead during the next few days in Islamabad (Anantnag) and Kupwara. In the hilly regions of Poonch a rebellion erupts which will continue for years.</p>
            <p className="description">1932</p>
            <p className="sub-description">Kashmiri Muslim leaders petition the British and the Dogra rulers for reforms. Several of them launch the All Jammu Kashmir Muslim Conference (MC) with a goal to fight for governmental reform, education, and representation for Kashmiri Muslims in the government. The Maharaja’s subsequent efforts to redress the grievances, including establishing Praja Sabha (“Subjects’ Assembly”) turn out to be empty as Muslim representation remains disproportionately minimal. A group of radical Kashmiri youth led by Sheikh Abdullah emerges as popular faction within the Muslim Conference.
            </p>
            <p className="description">1750s - 1846</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="description">1750s - 1846</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="description">1750s - 1846</p>
          </div>
        </div>
      </FrameModule>
    </AboutTemplateStyle>
  )
}