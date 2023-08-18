import purple from "../../assets/svg/purpleMin.svg"

const Meet = () => {
    return (
        <div className="md:mx-16 mx-2 rounded-3xl md:h-screen flex flex-col items-center md:flex-row" style={{ backgroundColor: '#FEF7F1' }}>
            <div className="md:w-1/2 flex flex-col justify-center items-start md:ml-10 ml-5 gap-7 w-100 md:p-18 p-6">
                <h4 className="md:text-xl font-normal text-sm">Built out of frustration</h4>
                <h1 className="md:text-4xl font-semibold text-lg">Meet the ahead app</h1>
                <img src={purple} alt="" className=" max-w-full max-h-40 md:self-center md:mx-10 border-[14px] border-gray-200 rounded-full" />
            </div>
            <div className="md:w-1/2 gap-4 text-sm md:text-base flex flex-col md:items-center justify-center self-end items-start w-[100%] md:mb-28 overflow-hidden md:p-14 p-4">
                <p>Lorem sterino einsrot ipsum dolor slit. Am aeirstn esot oisnete quas dolore dicta id, voluptas velit ipsa distinctio delectus </p>
                <p>Lore icing elit. Nesciunt praesee hic consectetur asperiores inventore culpa.</p>
            </div>
        </div>
    )
}

export default Meet