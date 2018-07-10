import React from 'react';
import './Weather.css';

 const Weather = (props) => {
     return(
            <div className='info'>
                <div className='temp'>
                    {props.temperature && <h1>{props.temperature}&deg;c</h1> }
                    {props.city && props.country && <p>{props.city}, {props.country}</p>}
                </div>
                <div className='desc'>
                    {props.humidity && <p>Humidity: {props.humidity}</p>}
                    {props.wind && <p>Wind: {props.wind}</p>}
                    {props.description && <p>Description: {props.description}</p>}
                    {props.error && <p>{props.error}</p>}
                </div>
            </div>
     );
 }
    


export default Weather;