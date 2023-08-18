

const Test = () => {
    return (
        <div className="md:mx-20 mx-6 my-28 flex flex-col gap-4 justify-center items-center text-center">
            <h5 className="font-normal text-lg">We take privacy seriously</h5>
            <h2 className="text-3xl font-semibold">Before you get started</h2>
            <h4 className="font-light text-xl md:px-44 px-4">&quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell you which friend said what about you)&quot;</h4>
            <h5 className="font-normal text-lg"> with love, Akshat </h5>
            <button className="hover:bg-white hover:text-black duration-500 bg-black border-2 text-white font-semibold px-5 py-3 rounded-3xl">start a test</button>
            <p className="text-gray-600 text-sm">Take only 5 minutes</p>
        </div>
    )
}

export default Test