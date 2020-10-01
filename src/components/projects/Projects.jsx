import React, { Component } from "react"
import Pentimento from './Pentimento'
import Coocucachew from './Coocucachew'
import VChatBot from './VChatBot'
import ThirdCultMasks from "./ThirdCultMasks"
import Shapes from "./Shapes"

export default class Projects extends Component {
    render(){
        return(
            <section className="projects" id="projects">
                <Shapes />
                <section className="projects__intro" id="projects">
                    <div className="projects__header projects__header--main">
                        <h2 className="heading-primary heading-primary--main heading-primary--shadow ">Projects</h2> 
                    </div>
                    <div className="projects__description">
                        <h4 className="heading-secondary heading-secondary--small">View one of the following projects:</h4>
                        <div className="projects__intro-thumbs">
                            <a href="#thirdcultmasks" className="projects__intro-thumbs__thumb-wrapper">
                                <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206969/G-Dev/imgs/imgs_thirdcult-homepage-thumb_llogav.jpg" alt="" className="projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-image"/>
                                <h3 className="heading-tertiary projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-title">
                                    Third Cvlt Masks
                                </h3>
                            </a>
                            <a href="#pentimento" className="projects__intro-thumbs__thumb-wrapper">
                                <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206985/G-Dev/imgs/imgs_pentimento-video-thumb_n07s3e.jpg"  alt="Pentimento Demo Video Thumbnail" className="projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-image"/>
                                <h3 className="heading-tertiary  projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-title">
                                    Pentimento
                                </h3>
                            </a>
                            <a href="#vchatbot" className="projects__intro-thumbs__thumb-wrapper">
                                <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206977/G-Dev/imgs/imgs_v-homepage-thumb_tx8tbf.jpg" alt="Vi Chat Bot Homepage Thumbnail" className="projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-image"/>
                                <h3 className="heading-tertiary projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-title">
                                    Vi Chat Bot
                                </h3>
                            </a>
                            <a href="#coocucachew" className="projects__intro-thumbs__thumb-wrapper">
                                <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206976/G-Dev/imgs/imgs_coocucachew-main-thumb_jaxfs0.jpg"  alt="Coocucachew Home Page Thumbnail" className="projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-image"/>
                                <h3 className="heading-tertiary  projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-title">
                                    Coocucachew
                                </h3>
                            </a>
                            <a href="#HiHello" className="projects__intro-thumbs__thumb-wrapper">
                                <img src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206965/G-Dev/imgs/imgs_dev-site-main-thumb_esmopt.jpg" alt="Programming Website Homepage Thumbnail" className="projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-image"/>
                                <h3 className="heading-tertiary  projects__intro-thumbs__thumb-wrapper projects__intro-thumbs__thumb-wrapper--thumb-title">
                                Programming Portfolio
                                </h3>
                            </a>
                        </div>
                        <div className="projects__description__button">
                            <a href="#thirdcultmasks"
                            className="btn btn--white u-margin-bottom-medium">
                                Or keep scrolling &#x21B4;
                            </a>
                        </div>
                    </div>
                </section>
               

                
                <ThirdCultMasks />
                <Pentimento />
                <VChatBot />
                <Coocucachew />
            </section>
        )
    }
}