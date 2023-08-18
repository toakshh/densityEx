
const Anonymous = () => {
    return (
        <div className="md:mx-6 mx-2 rounded-3xl flex flex-col items-center md:p-20 p-4 " style={{ backgroundColor: '#EDF8FE' }}>
            <div className="flex flex-col justify-center items-center gap-7 md:p-12 p-2">
                <h4 className="md:text-lg font-normal pl-2 text-sm  ">Let your friends, family and co-workers (anonymously) rate your social skills.</h4>
                <h1 className="md:text-4xl font-medium text-xl">Ever wondered what others think of you?</h1>
                <div className="flex flex-row ">
                    <img src={"star"} alt="" className="max-w-full" />
                </div>
            </div>
            {/* for larger screens */}
            <div className=" hidden md:block bg-white lg:w-4/6 md:w-full sm:w-5/6 w-1/2 md:p-16 p-6 overflow-visible rounded-3xl shadow-2xl hover:scale-110 duration-500">
                <h1 className="border-b-2 relative text-white font-semibold">
                    <div className="absolute  -left-14 -top-14 px-3 py-2  bg-violet-500 rounded-lg">You</div>
                    <div className="absolute w-3 h-3 rounded-full -mt-1 left-0 bg-violet-500"></div>
                    <div className="absolute  left-28 -bottom-14 px-3 py-2 bg-sky-400 rounded-lg">Anonymous1</div>
                    <div className="absolute w-3 h-3 rounded-full -mt-1 left-28 bg-sky-400"></div>
                    <div className="absolute  right-28 -top-14 px-3 py-2 bg-yellow-500 rounded-lg">Anonymous2</div>
                    <div className="absolute w-3 h-3 rounded-full -mt-1 right-28 bg-yellow-500"></div>
                    <div className="absolute  -right-32 -bottom-14 px-3 py-2 bg-green-400 rounded-lg">Anonymous3</div>
                    <div className="absolute w-3 h-3 rounded-full -mt-1 right-0 bg-green-400"></div>
                </h1>
            </div>
            {/* for mobile devices */}
            <div className=" md:hidden bg-white lg:w-4/6 md:w-full sm:w-5/6 w-1/2 md:p-16 p-6 overflow-visible flex justify-center rounded-3xl shadow-2xl hover:scale-125 duration-500">
            <div className="w-0.5 h-44 bg-gray-300 relative">
                    <div className="absolute  -top-10 -right-16 px-3 py-2 bg-violet-500 rounded-lg">You</div>
                    <div className="absolute w-3 h-3 rounded-full -ml-1 left-0 bg-violet-500"></div>
                    <div className="absolute  top-10 -left-32 px-3 py-2 bg-sky-400 rounded-lg">Anonymous1</div>
                    <div className="absolute w-3 h-3 rounded-full -ml-1 top-10 bg-sky-400"></div>
                    <div className="absolute  bottom-10 -right-32 px-3 py-2 bg-yellow-500 rounded-lg">Anonymous2</div>
                    <div className="absolute w-3 h-3 rounded-full -ml-1 bottom-10 bg-yellow-500"></div>
                    <div className="absolute  -bottom-10 -left-32 px-3 py-2 bg-green-400 rounded-lg">Anonymous3</div>
                    <div className="absolute w-3 h-3 rounded-full -ml-1 bottom-0 bg-green-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Anonymous