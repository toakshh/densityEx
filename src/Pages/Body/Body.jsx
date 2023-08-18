import Anonymous from "../../components/Anonymous/Anonymous"
import Cards from "../../components/Cards/Cards"
import Eqbeats from "../../components/EqBeats/Eqbeats"
import Hero from "../../components/Hero/Hero"
import Meet from "../../components/Meet/Meet"
import Test from "../../components/Test/Test"
import Timeline from "../../components/Timeline/Timeline"

const eqBeatsIq= {
    heading:"EQ beats IQ",
    card1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore possimus cum perspiciatis a sapiente voluptatem itaque, beatae totam blanditiis.",
    card2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus recusandae corrupti nisi adipisci voluptas accusantium ab placeat ducimus beatae officiis.",
}
const bestIq= {
    heading:"Be the best you with EQ",
    card1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore possimus cum perspiciatis a sapiente voluptatem itaque, beatae totam blanditiis.",
    card2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus recusandae corrupti nisi adipisci voluptas accusantium ab placeat ducimus beatae officiis.",
}

const Body = () => {
    return (
        <main className="px-8">
            <Hero />
            <Eqbeats content={eqBeatsIq}/>
            <Cards />
            <Meet />
            <Timeline />
            <Eqbeats content={bestIq}/>
            <Anonymous />
            <Test />
        </main>
    )
}

export default Body