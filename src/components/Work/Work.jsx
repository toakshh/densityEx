import purpleFace from "../../assets/svg/purpleMin.svg"

const cardData = [{
    id: "rsiten",
    heading: "Power through density",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "rsts",
    heading: "Obviously it did work",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "hd",
    heading: "About you that i have done",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "td",
    heading: "Nothing done now",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "rsjhdtsiten",
    heading: "okay this is what is gonna happen",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "wfpghts",
    heading: "this is very serious issue",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}, {
    id: "rsitatdhen",
    heading: "a work and patience",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus odit hic accusantium dicta quaerat!"
}]
const Work = () => {
    return (
        <div className="md:h-[150vh] h-fit  rounded-3xl md:mx-6 mx-0 my-64 flex flex-col md:flex-row justify-between md:p-10" style={{ backgroundColor: "#F3F1FF" }}>
            <div className="md:w-1/2 w-full flex gap-4 flex-col pt-10">
                <h2 className="sm:text-5xl text-3xl text-center font-bold">Work with us</h2>
                <div>
                    <div className="md:p-10 p-3 bg-white rounded-3xl gap-4 flex flex-col md:w-full w-3/4 md:mx-0 mx-auto hover:scale-110 duration-500">
                        <img src={purpleFace} alt="purple face" className="w-16 h-16" />
                        <h3 className="text-lg font-semibold">About</h3>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam. Expedita officia sit aut exercitationem optio unde voluptatibus doloribus, quos, amet dolore modi fugit soluta!</p>
                    </div>
                    <div className="md:p-10 p-3 bg-pink-100 rounded-3xl gap-4 flex flex-col md:w-full w-3/4 md:mx-0 mx-auto hover:scale-110 duration-500">
                        <h3 className="text-lg font-semibold">Product</h3>
                        <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum magni, nobis laboriosam eveniet quia sapiente ad repellendus! Accusamus, doloremque?</p>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 w-full pt-10 flex flex-col gap-4">
                <h2 className="sm:text-5xl text-3xl md:self-end self-center text-blue-700 font-bold">ahead</h2>
                <div className="lg:max-h-[90%] max-h-fit overflow-y-scroll gap-8 p-4 flex md:flex-col flex-row md:overflow-y-scroll overflow-x-scroll items-end ">
                    {
                        cardData.map(item => {
                            return (
                                <div key={item.id} className="lg:w-2/3 md:w-full md:min-w-min w-44 sm:w-6/12 flex-shrink-0 overflow-x-scrolls lg:p-10 p-3 min-h-60 bg-white rounded-3xl gap-4 flex flex-col md:mx-0 mx-auto">
                                    <h3 className="text-lg font-semibold">{item.heading}</h3>
                                    <p className="font-light">{item.paragraph}</p>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default Work