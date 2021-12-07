import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = 'Hesisted Coffee || Group 2 || ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
