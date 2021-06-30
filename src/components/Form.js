import React from 'react'
import '../styles/Form.scss'

export default function Form(props){
        return (
            <>
                <form>
                    <input placeholder="Shorten a link here..."/>
                    <button className ="btn hover:bg-opacity-50 tracking-widest">Shorten It!</button>
                </form>
                <p id="error"></p>
            </>
        )
}
