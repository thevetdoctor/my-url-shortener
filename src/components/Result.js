import React from 'react'
import '../styles/Result.scss'

const Result = (props) => {
    return (
        <div className="result">
          <span className="fullLink">{props.fullLink}</span>
          <div className="shortenedDetails">
            <span className="shortenedLink">{props.shortenedLink}</span>
            <a href="#" className="btn">Copy</a>
          </div>
        </div>
    )
}
export default Result;
