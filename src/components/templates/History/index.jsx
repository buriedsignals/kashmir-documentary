// Styles
import { HistoryTemplateStyle } from "./index.style"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"

export default function HistoryTemplate() {
  // Store
  const backgroundImage = useStore((s) => s.backgroundImage)
  return (
    <HistoryTemplateStyle>
      <FrameModule noBottom={ true } backgroundImage={ `./images/${ backgroundImage }` }>
        <div className="content-history">
          <div className="content-history-container">
            <h1 className="title">Historical Timeline</h1>
            <p className="description">An overview of events in Kashmir.</p>
            <p className="sub-description">
            Kashmir emerged as an “international dispute” in 1947 but looking at the Kashmir question exclusively from the prism of 1947 privileges India-Pakistan state-centric perspectives while erasing Kashmir’s own distinct political history. To begin to understand the Kashmiri aspiration for self-determination, it is important to trace the major events that have shaped Kashmiri political subjectivity. Kashmir’s political history is a complex and volatile interaction between external forces and internal struggles. Keeping this in mind, I present this timeline as a resource for those curious about what drives the Kashmiri movement for self-determination despite the tremendous odds it faces. To be clear, the timeline is not the history of Kashmir, but a chronicle of key political events—and in being so, the timeline falls squarely within the long tradition of Kashmiri chronicle writing. I start with the year 1586 because many Kashmiris see the arrival of Mughals as the first tragic entanglement of Kashmir with South Asia.</p>
            <p className="description">1750s - 1846</p>
            <p className="sub-description">As the Mughal empire weakens, Kashmir first falls under the Afghans Durranis in 1747 and then under the Sikhs from Lahore 1819.</p>
            <p className="description">1846</p>
            <p className="sub-description">In the aftermath of Anglo-Sikh wars in the 1840s, the British East India Company reward a Dogra chieftain, Gulab, who had betrayed his Sikh overlords during the war, with control over Kashmir. Signed on 9 March 1846, the Treaty of Amritsar allows Gulab to claim the title of Maharaja of the state of Kashmir, which now includes Jammu and the kingdom of Ladakh that had been incorporated into the previous Sikh empire in 1808 and 1834 respectively. In return, Gulab agrees to serve British interests as a buffer state (primarily against the Tsarist Russia) and send Kashmiri soldiers to join British campaigns as and when called upon. A brief rebellion against the treaty by the Sikh-appointed Muslim governor of Kashmir Imam-ud-Din is suppressed. Despite most of their subjects being Muslim, Dogras turn the state into a Hindu kingdom. </p>
            <p className="description">1870s</p>
            <p className="sub-description">Dogra rule is marked by oppression, forced labor, and heavy taxation. Several artisans’ revolts are forcibly put down. Kashmiri Muslims, who form the majority of the state’s subjects, are systematically impoverished, disempowered and exploited, while the minority upper-caste Hindus become part of the ruling establishment. </p>
            <p className="description">1931</p>
            <p className="sub-description">On 13 July, Dogra troops shot 22 Kashmiris dead in Srinagar. Widespread protests erupt all over the country against the Dogra ruler. The protests are brutally suppressed. In the hilly regions of Poonch a rebellion erupts which continues for years.</p>
            <p className="description">1946</p>
            <p className="sub-description">Kashmiri parties National Conference and Muslim Conference start “Quit Kashmir” movement and “Campaign of action” agitations respectively, demanding the end of the monarchy. Dogra forces shoot 20 Kashmiri protestors dead. 
            </p>
            <p className="description">1947</p>
            <p className="sub-description">As Partition unfolds in British India, between August and October, Kashmir is independent. In September and October, Hindu militias and Dogra troops attack Jammu’s Muslims, killing tens of thousands. In Poonch, along the border with newly-created Pakistan, rebels create an independent state called “Azad (Free) Jammu Kashmir (AJK).” As ethnic cleansing of Jammu Muslims continues, many flee to AJK and to Pakistan. About 237,000 Muslims are dead and an equal number become refugees, including leaders of Muslim Conference. The Dogras lose control of Gilgit Baltistan province in the north. On 22 Oct 1947, Pashtun militiamen from North Western Frontier Province in Pakistan attack Dogra positions along the border.. Dogra ruler flees Kashmir  and asks India for help. Indians demand he sign the Treaty of Accession and give power over Kashmir’s defense, foreign affairs, and communication to India. On 26 October, Indian troops invade Kashmir and the Dogra ruler signs the treaty. The first India-Pakistan war over Kashmir breaks out.</p>
            <p className="description">1948</p>
            <p className="sub-description">The United Nations Security Council passes a resolution (UNSC Resolution 47) providing for 1. Ceasefire, 2. Withdrawal of Pakistani and Indian troops, and 3. Plebiscite in Kashmir (under international supervision with minimal Indian military presence). 
            </p>
            <p className="description">1949</p>
            <p className="sub-description">Ceasefire is proclaimed under the UN auspices. India is in control of two-thirds of the historic Kashmir state while Pakistan has control over one-third, including the AJK.
 
            </p>
            <p className="description">1950</p>
            <p className="sub-description">India backtracks on its promise of the plebiscite. Article 1 of Indian Constitution proclaims the entire state of J&K as a part of the territory of India. Article 370 gives a “special” status to the State of J&K, more or less corresponding to the terms of the Instrument of Accession. Pro-Pakistan Kashmiri leaders are arrested, and many are sent into exile.

            </p>
            <p className="description">1951</p>
            <p className="sub-description">India holds elections in Kashmir, and the National Conference under Sheikh Abdullah wins “unopposed.” The UNSC passes a resolution (UNSC Resolution 91) saying elections will not be a substitute for the plebiscite. In India, Hindu nationalists begin agitation over giving special status to Kashmir. They demand “one country, one constitution, one flag.” Prime Minister Abdullah sees them as a threat and begins to shift positions between endorsing Kashmir’s accession to India and supporting the right of self-determination for Kashmiris. He signs the Delhi Agreement, but does not confirm the accession of Kashmir to India. The Delhi Agreement says: 1. except in three matters listed under Instrument of Accession, sovereignty will reside in Jammu and Kashmir; 2. Kashmiris will be citizens of India, but the elected Kashmir government will decide permanent residency requirements in the state; 3. Kashmir will have its own flag and constitution; 4. Kashmir will have a Prime Minister (wazir azam) and President (sadr-e-riyasat). 

            </p>
            <p className="description">1953</p>
            <p className="sub-description">In August, India arrests Abdullah, charging him with conspiring to create an independent Kashmir. His aide G.M. Bakshi is installed as the Prime Minister. 
 
            </p>
            <p className="description">1954</p>
            <p className="sub-description">Bakshi gets the accession formally ratified in 1954. India passes a “Presidential Order” using Article 370 granting India more powers over Kashmir and starting the “erosion of autonomy.” All dissent in Kashmir is crushed. 
            </p>
            <p className="description">1957</p>
            <p className="sub-description">The UN passes another resolution (UNSC Resolution 122) affirming that only the “will of the people expressed through the democratic method of a free and impartial plebiscite conducted under the auspices of the United Nations” will determine Kashmir’s final status, and states that the J&K Constituent Assembly’s actions, including administrative or legal changes, are invalid and would not constitute a final disposition of the state. 
            </p>
            <p className="description">1962</p>
            <p className="sub-description">India and China fight a war. India loses control over large tracts of land in Ladakh, especially Aksai Chin, that had been part of the State of Jammu and Kashmir. 
            </p>
            <p className="description">1965</p>
            <p className="sub-description">Second India-Pakistan war breaks out after Pakistan sends infiltrators across the ceasefire line in August. The war ends in a ceasefire and the status quo remains unchanged. India removes the title of Prime Minister and Sadr e Riyasat from its loyalist Kashmiri officials, instead using the term Chief Minister. 
            </p>
            <p className="description">1966</p>
            <p className="sub-description">Small Kashmiri armed revolutionary groups emerge. These groups call for complete independence of Jammu and Kashmir. One of these groups is the Jammu Kashmir National Liberation Front (JKNLF) created by Maqbool Bhat, which will later become JKLF. 
            </p>
            <p className="description">1974</p>
            <p className="sub-description">Abdullah is allowed to return to Kashmir after he signs an accord with India that he will give up the demand for self-determination. 
            </p>
            <p className="description">1984</p>
            <p className="sub-description">On 11 February, India hangs Maqbool Bhat and refuses to return his body to his family. 
            </p>
            <p className="description">1987</p>
            <p className="sub-description">A number of opposition parties join to form an alliance against the NC. They are called the Muslim United Front (MUF). There is blatant poll rigging. Young polling agents of MUF, among them Yasin Malik, are arrested and tortured. Abdullah’s son, Farooq, is allowed to win the elections and becomes Chief Minister. 
            </p>
            <p className="description">1988</p>
            <p className="sub-description">Repression in Kashmir increases. Protestors demanding basic things, like electricity, are shot down. Several groups of young Kashmiri men join the JKLF, which has declared an armed struggle against India. JKLF becomes popular across Kashmir.
            </p>
            <p className="description">1990</p>
            <p className="sub-description">Indian military forces carry out several massacres across Kashmir in January. Protests intensify, and thousands of Kashmiris publicly resign from pro-India parties. On 17 January, India dismisses Farooq Abdullah’s government and imposes central rule. A Hindu nationalist bureaucrat, Jagmohan is installed as the governor. Jagmohan swiftly launches widespread military crackdowns on urban neighborhoods. Intense curfews are imposed. Armed groups carry out assassinations of government officials, NC activists, and intelligence agents. While many of these (~200) are Kashmiri Muslim, a significant number (~70) is Kashmiri Hindus, many of whom who have held top positions in the government and constitute 3 percent of the population. Thousands of Hindu families begin to leave Kashmir, many unable to return for years. On 21 January, an estimated 55-65 Kashmiri protesters are killed by Indian troops near Gawakadal in Srinagar. On 25 January, Indian forces kill 21 protestors in Handwara town. On 1 March, Indian soldiers kill around 50 Kashmiri protestors near Tengpora in Srinagar. In early March, an estimated one million Kashmiris take to the streets for several days. Indian soldiers kill dozens. In response, hundreds of Kashmiris pour into AJK and return to join the armed movement. In May, Indian troops kill 60 Kashmiri mourners in Srinagar. There are more than 300,000 active duty Indian soldiers in Kashmir now. By summer, India imposes Armed Forces Special Powers Act, which gives a free hand to the military.  
            </p>
            <p className="description">1991</p>
            <p className="sub-description">As repression continues, armed groups in Kashmir proliferate. Indian military is unable to crush the rebellion. Thousands of Kashmiris are dying in the war. On 23 February, Indian soldiers enter two villages, Kunan and Poshpora, in north Kashmir and rape dozens of Kashmiri women. 
            </p>
            <p className="description">1993</p>
            <p className="sub-description">All Parties Hurriyat Conference (APHC) is formed. It is an amalgamation of dozens of Kashmiri political groups. Its express goal is Kashmir’s “right to self-determination” but keeps the question of independence or merger with Pakistan open. As armed movement continues, Indian military repression grows. In January, Indian paramilitary Border Security Force (BSF) massacre more than 100 unarmed civilians and burn down several neighborhoods of Sopore town. In October, BSF kills 55 Kashmiris who had assembled after Friday prayers in Bijbehara town in South Kashmir. 

            </p>
            <p className="description">1998</p>
            <p className="sub-description">On 25 January, 23 Kashmiri Hindus are killed in a massacre in Wandhama village. India blames Islamist militants. Armed militancy spreads to the Muslim districts of Jammu province. In Kashmir valley, Indian counterinsurgency war continues. Hundreds of Kashmiri Muslims are killed year after year. 
            </p>
            <p className="description">1999</p>
            <p className="sub-description">War between India and Pakistan breaks out in Kargil, a border district on the LoC. 
            </p>
            <p className="description">2000</p>
            <p className="sub-description">On 20 March, just before US President Bill Clinton’s visit to India, 35 Kashmiri Sikhs villagers are killed by unidentified gunmen in South Kashmir. India again blames Islamic militants, but prominent Sikh leaders (and later US officials) blame Indian government agencies for orchestrating the attack to seek US sympathy. Indian forces abduct, kill, and mutilate bodies of 5 local Kashmiris and claim them to be the “foreign Islamist militants” responsible for killing the Sikhs. A week after, Indian forces kill 9 protestors demanding an impartial investigation. Despite attempts to fudge the DNA, subsequent tests of the exhumed corpses prove that the 5 dead “foreign militants” were actually local civilians. 
            </p>
            <p className="description">2008</p>
            <p className="sub-description">In June, to oppose an Indian government move to transfer land in Kashmir to a non-local entity, widespread protests erupt across Kashmir. Indian forces kill 100 protestors. In Jammu, angry Hindu nationalists impose an economic blockade on Kashmir for weeks, closing the only highway into Kashmir. During a procession headed toward the LOC to open the border to relieve suffering due to the Jammu blockade, Indian forces kill prominent Kashmiri leader of APHC Sheikh Aziz along with 20 other Kashmiris.
            </p>
            <p className="description">2009</p>
            <p className="sub-description">In May, rape and murder of two Kashmiri women in Shopian lead to widespread protests across Kashmir. Independent investigations show Indian forces are involved and doctors establish rape. Indian government claims the two had drowned in a stream and closes the investigation. A Kashmiri human rights group discovers 2700 unmarked mass graves across three districts of the highly-militarized North Kashmir. The graves contain some 2900 unknown bodies, many believed to be among the 8000 enforced disappearances that have taken place in Kashmir since 1989.  
            </p>
            <p className="description">2010</p>
            <p className="sub-description">Protest erupt against Indian forces in response to the killing of an 8-year old Kashmiri boy Tufail Matoo. Indian forces impose a curfew and kill more than a 100 Kashmiris that summer.</p>
            <p className="description">2014</p>
            <p className="sub-description">In prison since the 2001 Indian Parliament attack case, India hangs a Kashmiri man Afzal Guru on 9 February. Several Indian civil society groups had claimed that the evidence of his role in the attacks was thin. Guru had claimed that he was set up by Indian agents in Kashmir. The Indian Supreme Court had infamously declared in its verdict that Guru must be hanged “to satisfy the collective conscience of the Indian society,” provoking shock and criticism across the world. Guru’s body is not returned to his family and is buried next to Maqbool Bhat’s in Delhi’s Tihar Jail.</p>
            <p className="description">2015</p>
            <p className="sub-description">In March, a pro-India Kashmiri party PDP forms alliance with Indian Prime Minister Narender Modi’s Hindu nationalist BJP. It is for the first time that Indian Hindu nationalists have officially come to power in Kashmir. A Jammu Kashmir Coalition of Civil Society report “Structures of Violence” reveals the disappearance of 8000+ persons, 70,000+ deaths, 6000+ unknown, unmarked and mass graves, and “countless cases of torture and sexual violence.” The report also estimates the strength of Indian armed forces in Jammu and Kashmir to be between “656,638 and 750,981” personnel.</p>
            <p className="description">2016</p>
            <p className="sub-description">On 8 July, Indian forces kill Burhan Wani, the 22-year old commander of HM. Kashmir erupts into stone-pelting protests. Indian forces kill dozens and blind hundreds of young Kashmiris. Months long curfew is imposed.</p>
            <p className="description">2017</p>
            <p className="sub-description">The Indian counterinsurgency war known as “Operation All Out” intensifies in South Kashmir. Hundreds are killed, mostly young Kashmiri militants and civilians.</p>
            <p className="description">2018</p>
            <p className="sub-description">In June, the BJP exits the coalition with the PDP. The Indian governor acquires full charge and dissolves the Legislative Assembly. </p>
            <p className="description">2019</p>
            <p className="sub-description">In February, a Kashmiri bomber attacks an Indian military convoy in South Kashmir killing 40 soldiers. India launches an air attack in Pakistan. Next day, Pakistan launches air strikes in Indian-controlled Kashmir. India starts a massive crackdown against APHC and JKLF and Muslim religious organizations across Kashmir. Thousands of Kashmiri political and civil society activists are arrested in raids. In late July, tens of thousands of new Indian forces enter Kashmir. On August 5, Indian government revokes Kashmir’s “autonomy” guaranteed under the Instrument of Accession and the Delhi Agreement. It also removes 35A paving the way for Indians citizens to settle in Kashmir. The leaders of NC and PDP are put under detention. Kashmir is under complete curfew and all forms of communication are shut down. On 31 October, Indian government splits the historic State of Jammu and Kashmir into two “Union Territories.” Indian government takes full control over determining land use and residency requirements, while its officials speak about instituting “Israeli-style settler colonies” in Kashmir. Intense crackdown and communication blockade in Kashmir ensure Kashmiris are unable to protest. </p>
            <p className="description">2020</p>
            <p className="sub-description">Indian government enacts a new “Domicile Law” for “Jammu and Kashmir Union Territory,” allowing Indians to become permanent residents of Kashmir. Indian officials in Kashmir start issuing certificates to Indians that would allow them to get state employment in Kashmir and make them eligible to purchase land. In July, Indian government issues new laws to expand military bases and create hundreds of thousands of “new housing units” in the region. </p>
            <p className="description">2022</p>
            <p className="sub-description">Indian officials grant around 2.5 million Indian visitors to Kashmir the right to vote in Kashmir’s elections, seeking to manufacture a Hindu BJP-led government to formalize the 2019 revocation of autonomy. Widespread assault on Kashmiri activists, journalists and intellectuals continues.</p>
          </div>
        </div>
      </FrameModule>
    </HistoryTemplateStyle>
  )
}