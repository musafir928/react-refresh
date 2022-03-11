import PropTypes from 'prop-types'; 

const Title = ({title, subtitle}) => {
  return (
    <div>
        <h1 
            className="title p-5 bg-info rounded shadow-lg border border-warning"
        >{title}</h1>
        <br />
        <h3 className="fst-italic black-quote mb-5">{subtitle}</h3>
    </div>
  )
}

Title.defaultProps = {
    title: "default title",
    subtitle: "default subtitle"
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Title
