import angryFace from "../../assets/svg/angryCard.svg"
import CardItems from "./CardItems"
import { motion,useAnimation,useInView } from "framer-motion"
import { useEffect,useRef } from "react"

const Cards = () => {
    const imageRef = useRef(null);
    const inView = useInView(imageRef, {once: false})
    const headingContent= useAnimation();
    const cardsContent= useAnimation();
    useEffect(()=>{
        if(inView){
            headingContent.start({y:0, opacity:1})
            cardsContent.start({x:-200})
        }
        if(!inView){
            cardsContent.start({x:0})
        }
    },[inView])

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
        <div ref={imageRef} className="mx-6" >
            <motion.h1
                initial={{ y: 100, opacity:.5 }}
                animate={headingContent}
                transition={{ duration: .5 }}
                className="font-semibold md:text-5xl text-2xl inline-flex"
            >   Does this sound familiar...
                <span>
                    <motion.img drag dragConstraints={imageRef} src={angryFace} alt="angryFace" className="w-36 h-36 hover:rotate-45 duration-200 z-50" /></span>
            </motion.h1>
            <div className="flex overflow-x-scroll gap-14 my-5 p-10 overflow-visible " >
                {
                    cardData.map(item => {
                        return <motion.div
                            initial={{x:0}}
                            animate={cardsContent}
                            transition={{ duration: 1, easings:["easeInOut"] }}
                            className="h-fit z-40" key={item.id}>
                            <CardItems item={item} />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

export default Cards