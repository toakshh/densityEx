import angryFace from "../../assets/svg/angryCard.svg"
import CardItems from "./CardItems"
import { motion } from "framer-motion"
import { useRef } from "react"

const Cards = () => {
    const imageRef = useRef(null);
    
    const cardData = [{
        id: "rstieh-inrts",
        emoji: "\u{1F603}",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "rstieh-srtts",
        emoji: "🥴",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "std-srtts",
        emoji: "🤧",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "arts-srtts",
        emoji: "🤕",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "arts-hdt",
        emoji: "😵‍💫",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "arts-fpd",
        emoji: "🫣",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "arts-nhdtc",
        emoji: "😇",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "aarstd",
        emoji: "🤮",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    },
    {
        id: "arrsthtbdtcx",
        emoji: "🥹",
        title: "Lorem ipsum dolor sit",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis aliquid quam sit similique a ad! Corrupti repellat in dolores. Nam libero ex voluptatem itaque."
    }]
    return (
        <div className="mx-6" >
            <h1
                className="font-semibold md:text-5xl text-2xl inline-flex"
                ref={imageRef}
            >   Does this sound familiar...
                <span>
                    <motion.img drag dragConstraints={imageRef} src={angryFace} alt="angryFace" className="w-20 h-20 hover:rotate-45 duration-200" /></span>
            </h1>
            <div className="flex overflow-x-scroll gap-14 my-5 p-10 overflow-visible ">
                {
                    cardData.map(item => {
                        return <div
                            className="h-fit" key={item.id}>
                            <CardItems item={item} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cards