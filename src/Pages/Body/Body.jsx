
import Cards from "../../components/Cards/Cards"
import Eqbeats from "../../components/EqBeats/Eqbeats"
import Hero from "../../components/Hero/Hero"


const Body = () => {
    return (
        <main className="px-8">
            <Hero />
            <Eqbeats />
            <Cards />
        </main>
    )
}

export default Body