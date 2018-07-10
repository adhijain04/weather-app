import React from 'react' ;
import './Form.css';

const Form = (props) => {
        return(
            <form onSubmit={props.getWeather} className='form'>
                <input className=' ' type="text" name='city' placeholder='Enter your City'/>
                <input type="text" name='country' placeholder='Enter your Country'/>
                <button className='btn'>Get Weather</button>
            </form>
        );
    }

export default Form;