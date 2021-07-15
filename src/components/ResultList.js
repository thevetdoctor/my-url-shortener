import React from 'react'
import Result from './Result'
import '../styles/ResultsList.scss'

const ResultList = (props) => {

    const shortenedResults = props.results;
    const listItems = shortenedResults.map(item=> <Result fullLink={item.original_link} shortenedLink={item.full_short_link}/>);
    return (
        <div id="results" className="container">
            {listItems}
        </div>
    )
}
export default ResultList
