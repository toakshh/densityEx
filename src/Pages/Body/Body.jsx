
import Cards from "../../components/Cards/Cards"
import Eqbeats from "../../components/EqBeats/Eqbeats"
import Hero from "../../components/Hero/Hero"
import Meet from "../../components/Meet/Meet"
import Timeline from "../../components/Timeline/Timeline"


const Body = () => {
    return (
        <main className="px-8">
            <Hero />
            <Eqbeats />
            <Cards />
            <Meet />
            <Timeline />
        </main>
    )
}

export default Body