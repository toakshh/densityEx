import angryFace from "../../assets/svg/angryCard.svg"

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

    return (
        <div className="md:mx-14 mx-6 my-20 p-2 lg:px-56 md:px-32 ">
            <div className=" flex flex-col justify-center items-start gap-7 w-100">
                <h4 className="md:text-lg font-normal text-sm">Wrong with self-improvement & how we&apos;re fixing it.</h4>
                <h1 className="md:text-4xl font-semibold text-lg">self-imporvement. Ugh.</h1>
                <img src={angryFace} alt="angry face" className="max-w-full max-h-40 -mt-10 self-end" />
            </div>
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