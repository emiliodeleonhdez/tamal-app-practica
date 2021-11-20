import React from 'react'

const PrimaryButton = ({type, buttonText}) => {
    return (
        <a href="https://google.com" className={`btn btn-${type}`}>
        {buttonText}
      </a>
    )
}

export default PrimaryButton
