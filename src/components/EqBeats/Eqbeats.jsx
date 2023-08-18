import PropTypes from 'prop-types'

const Eqbeats = ({content}) => {
    return (
        <div className="flex md:flex-row flex-col md:mx-20 mx-2 my-20 flex-wrap md:max-w-[90%] gap-6 md:gap-0">
            <h3 className="md:w-1/3 md:h-max text-4xl font-medium px-4">{content.heading}</h3>
            <div className="md:w-1/3 md:h-max px-4">{content.card1}</div>
            <div className="md:w-1/3 md:h-max px-4" >{content.card2}</div>
        </div>
    )
}
Eqbeats.propTypes ={
    content: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        card1: PropTypes.node.isRequired,
        card2: PropTypes.node.isRequired,
    }).isRequired,
}
export default Eqbeats