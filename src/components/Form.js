import React from 'react'
import '../styles/Form.scss'

export default function Form(props){
        return (
            <>
                <form onSubmit={props.onSubmit}>
                    <div className="form">
                        <input placeholder="Shorten a link here..." value={props.value} onChange={props.onChange} className={props.formFieldValid ? "" :"error"}/>
                        <button type="submit" className ="btn hover:bg-opacity-50 tracking-widest">Shorten It!</button>
                    </div>
                    <p id="error">{props.errorMessage}</p>
                </form>
            </>
        )
}
