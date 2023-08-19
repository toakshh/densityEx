import Download from "../../assets/svg/Download_btn.svg"
import star from "../../assets/svg/5star.svg"
import phone from "../../assets/svg/mobile.svg"
import { motion,useAnimation,useInView } from "framer-motion"
import { useEffect,useRef } from "react"

const Hero = () => {
    const ref=useRef(null);
    const inView = useInView(ref, {once: false})
    const rightContent= useAnimation();
    const leftContent= useAnimation();
    useEffect(()=>{
        // console.log(inView)
        if(inView){
            leftContent.start({ x: 0 })
            rightContent.start({x:0})
        }
        if(!inView){
            leftContent.start({x:-200})
            rightContent.start({x:200})
        }
    },[inView])
    return (
        <div ref={ref} className="overflow-x-hidden md:mx-6 mx-2 rounded-3xl md:h-screen flex flex-col-reverse md:flex-row" style={{ backgroundColor: '#EEEBFE' }}>
            <motion.div
                
                initial={{ x: -200 }}
                animate={leftContent}
                transition={{ duration: .9, easings:["easeInOut"] }}
                className="md:w-1/2 flex flex-col justify-center items-start md:ml-10 ml-5 gap-7 w-100"
            >
                <motion.h4 
                initial={{ x: -200 }}
                animate={leftContent}
                transition={{ duration: 1.5 }}
                    className="md:text-3xl font-medium pl-2 "
                >Ahead app
                </motion.h4>
                <h1 className="md:text-7xl font-medium text-3xl">Master your life by mastering emotions</h1>
                <div className="flex flex-row ">
                    <a href="#"><img src={Download} alt="download button" /></a>
                    <img src={star} alt="5 start rating" className="ml-6 w-32 h-12 max-w-full" loading="lazy"/>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 200, }}
                animate={rightContent}
                transition={{ duration: .9, easings:["easeInOut"] }}
                className="md:w-1/2 flex justify-center items-center w-100 overflow-hidden"
            >
                <img 
                    src={phone} alt="mobile" className="max-h-[85%] hover:scale-110 p-14 ease-in-out duration-500 hover:rotate-12  border-4 border-dashed border-white rounded-full"  />
            </motion.div>
        </div>
    )
}

export default Hero