import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import C1 from "./C1.jpg"
import C2 from "./C2.jpg"
import C3 from "./C3.jpg"

import "./SliderPf2.css"

const SliderPf2 = () => {


    return (
        <div className='main-div'>
            <h1>Carousol Slider</h1>
            <div className='sub-div'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="a-block w-50" src={C1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="b-block w-50" src={C2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="c-block w-50" src={C3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SliderPf2