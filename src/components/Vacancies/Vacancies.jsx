const cardJob = [{
    id: "srta",
    heading: "Senior Full-Stack Developer",
    content: <ul><li className="list-disc list-inside">Fulltime position</li>
        <li className="list-disc list-inside">Berlin or remote</li>
        <li className="list-disc list-inside">$200k- 800k</li></ul>
},
{
    id: "sstrta",
    heading: "Senior Designer",
    content: <ul><li className="list-disc list-inside">Fulltime position</li>
        <li className="list-disc list-inside">Berlin or remote</li>
        <li className="list-disc list-inside">$100k- 600k</li></ul>
},
{
    id: "srtra",
    heading: "Superstar Intern",
    content: <ul><li className="list-disc list-inside">Fulltime position</li>
        <li className="list-disc list-inside">Berlin or remote</li>
        <li className="list-disc list-inside">$50k- 90k</li></ul>
}]
const Vacancies = () => {
    return (
        <div className="mb-36">
            <h2 className="sm:text-5xl text-2xl font-semibold md:m-10 m-3">Open vacancies</h2>
            <div className="flex lg:flex-row flex-col justify-center items-center md:p-12 p-3 gap-4">

                {
                    cardJob.map(item => {
                        return (
                            <div key={item.id} className='select-none gap-2 sm:w-96 w-[80%] h-auto flex flex-col flex-nowrap p-10 bg-pink-100 rounded-2xl duration-500 ease-in-out'>
                                <h5 className='font-semibold'>{item.heading}</h5>
                                <p >{item.content}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default Vacancies