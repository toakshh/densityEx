import purple from "../../assets/svg/purpleMin.svg"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Meet = () => {
    const imgRef = useRef(null);
    const inView = useInView(imgRef, { once: false })
    const leftContent = useAnimation();
    const rightContent = useAnimation();
    const imageVariants = {
        initial: { x: 0 },
        animate: { x: '200%', y: "-250%", transition: { duration: 3, repeat: Infinity, ease: 'linear' } },
    };
    useEffect(() => {
        if (inView) {
            leftContent.start({ opacity: 1, y: 0 })
            rightContent.start({ x: 100, y: 0 })
        }
        if (!inView) {
            rightContent.start({ x: 500, y: 450 })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <div ref={imgRef} className="md:mx-16 mx-2 rounded-3xl md:h-screen flex flex-col items-center md:flex-row" style={{ backgroundColor: '#FEF7F1' }}>
            <div className="md:w-1/2 flex flex-col justify-center items-start md:ml-10 ml-5 gap-7 w-100 md:p-18 p-6">
                <motion.h4 initial={{ opacity: 0, y: 75 }} animate={leftContent} transition={{ duration: 0.5, delay: .25 }} className="md:text-xl font-normal text-sm">Built out of frustration</motion.h4>
                <motion.h1 initial={{ opacity: 0, y: 75 }} animate={leftContent} transition={{ duration: 0.5, delay: .25 }} className="md:text-4xl font-semibold text-lg">Meet the ahead app</motion.h1>
                
                <motion.img 
                    drag 
                    dragConstraints={imgRef} 
                    initial="initial"
                    animate="animate"
                    variants={imageVariants} 
                    src={purple} 
                    alt="round face image" 
                    className=" max-w-full max-h-40 md:self-center md:mx-10 border-[14px] border-gray-200 rounded-full hover:rotate-45 duration-1000" 
                />
            </div>
            <div className="md:w-1/2 gap-4 text-sm md:text-base flex flex-col md:items-center justify-center self-end items-start w-[100%] md:mb-28 overflow-hidden md:p-14 p-4">
                <p>Lorem sterino einsrot ipsum dolor slit. Am aeirstn esot oisnete quas dolore dicta id, voluptas velit ipsa distinctio delectus </p>
                <p>Lore icing elit. Nesciunt praesee hic consectetur asperiores inventore culpa.</p>
            </div>
        </div>
    )
}

export default Meet