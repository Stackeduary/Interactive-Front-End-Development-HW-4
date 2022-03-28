import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({onClick}) => {
    return (
        <div>
            <div>
                <h2>Weather Dashboard</h2>
                <button onClick={onClick}>+ Add Widget</button>
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Dashboard