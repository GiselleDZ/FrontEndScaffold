import React, { Component } from "react"

export default class ContactPop extends Component {

    render(){
        return(
            <section className="popup" id="contactpopup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="./thirdcvlt-imgs/mask1.jpg" alt="white mask on white mask, atop grey whethered wood" className="popup__left--img" />
                        <img src="./thirdcvlt-imgs/mask8.jpg" alt="black on black mask, atop grey whethered wood" className=" popup__left--img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-masks" className="popup__close">&times;</a>
                        <h2 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                            Find out more about Thirdcvlt wholesale
                        </h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Wholesale
                        </h3>
                        <p className="popup__text u-margin-bottom-medium">
                            You can find out more about wholesale by reaching out to stella@thirdcvlt.com
                        </p>
                        <button className="btn btn--white">a good cta</button>
                    </div>
                </div>
            </ section>
        )
    }
}
