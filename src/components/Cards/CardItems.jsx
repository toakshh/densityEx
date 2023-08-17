import PropTypes from 'prop-types'

const generateRandomLightColor = () => {
    const randomChannel = () => Math.floor(Math.random() * 156) + 100; // Generates values between 100 and 255
    const color = `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`;
    return color;
};
const CardItems = ({ item }) => {
    const randomBackgroundColor = generateRandomLightColor();
    return (
        <div style={{ backgroundColor: randomBackgroundColor }} className='select-none gap-2 w-80 max-w-8xl h-auto flex flex-col flex-nowrap p-10 bg-slate-500 rounded-2xl hover:-rotate-12 ease-in-out duration-500' >
            <span role="img" aria-label="Emoji" className='text-4xl'>
                {item.emoji}
            </span>
            <h5 className='font-semibold'>{item.title}</h5>
            <p>{item.content}</p>
        </div>
    )
}
CardItems.propTypes = {
    item: PropTypes.object
}

export default CardItems