import angryFace from "../../assets/svg/angryCard.svg"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
const timelineData = [{
    id: "randome-osinte",
    heading: "lorem ipsum 123 but it is",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium facere cupiditate enim. Ipsam, facilis?"
},
{
    id: "randome-srt",
    heading: "lorem ipsum 345 but it is",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium facere cupiditate enim. Ipsam, facilis?"
},
{
    id: "randome-dt",
    heading: "lorem ipsum 543 but it is",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium facere cupiditate enim. Ipsam, facilis?"
},
{
    id: "randome-stfx",
    heading: "lorem ipsum 1234 but it is",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium facere cupiditate enim. Ipsam, facilis?"
}]

const Timeline = () => {
    const contentRef= useRef(null);
    const inView = useInView(contentRef, { once: false })
    const leftContent = useAnimation();
    const rightContent = useAnimation();

    useEffect(() => {
        if (inView) {
            leftContent.start({ x:0 })
            rightContent.start({ x: 0 })
        }
        if (!inView) {
            leftContent.start({x:-400})
            rightContent.start({ x: 400})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <div ref={contentRef} className="md:mx-14 mx-6 my-20 p-2 lg:px-56 md:px-32 ">
            <motion.div initial={{x:-400}} animate={leftContent} transition={{duration: .9}} className=" flex flex-col justify-center items-start gap-7 w-100">
                <h4 className="md:text-lg font-normal text-sm">Wrong with self-improvement & how we&apos;re fixing it.</h4>
                <h1 className="md:text-4xl font-semibold text-lg">self-imporvement. Ugh.</h1>
                <motion.img initial={{x:400}} animate={rightContent} transition={{duration: .9}} drag dragConstraints={contentRef} src={angryFace} alt="angry face" className="max-w-full max-h-40 -mt-10 self-end" />
            </motion.div>
            <ol className="relative border-l">
                {
                    timelineData.map(item => {
                        return (
                            <li key={item.id} className="mb-10 ml-4 hover:scale-110 duration-500">
                                <div className="absolute w-2 h-2 rounded-full mt-1.5 -left-1 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
                                <h3 className="text-lg font-medium text-black-900">{item.heading}</h3>
                                <p className="mb-4 text-base font-normal text-gray-500">{item.description}</p>
                            </li>
                        )
                    })}
            </ol>
        </div>
    )
}

export default Timeline