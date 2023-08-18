
import Cards from "../../components/Cards/Cards"
import Eqbeats from "../../components/EqBeats/Eqbeats"
import Hero from "../../components/Hero/Hero"
import Meet from "../../components/Meet/Meet"


const Body = () => {
    return (
        <main className="px-8">
            <Hero />
            <Eqbeats />
            <Cards />
            <Meet />
        </main>
    )
}

export default Body