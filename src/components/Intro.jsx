import React, { Component } from "react"

export default class Intro extends Component {

    constructor(){   
        super() 
        this.state = {
            card : "front",
            text : "Some of the tech I use",
            flip: false,
            cardClass: "card card--no-flip"
        }
        this.handleFlip = this.handleFlip.bind(this)
        this.noFlip = this.noFlip.bind(this)
    }

    handleFlip(e){
        const aboutMe = "Back to about me"
        const tech = "Some of the tech I use"

        if (this.state.card === "front"){
            this.setState({
                card: "back",
                text: aboutMe,
                flip: true,
                cardClass: "card card--flip"
            })
        } else {
            this.setState({
                card: "front",
                text: tech,
                flip: false,
                cardClass: "card card--no-flip"
            })
        }
    }
    noFlip(e){
        e.stopPropagation()
    }

    render(){
        return(

            // Intro styling can be found in sass > pages > home 
            <section className="intro" id="intro">
                <div className="intro__card-container">

                {/* Card styling can be found in sass > components / card  */}
                    <div className={this.state.cardClass} onClick={() => this.handleFlip() } >
                        <div className="card__side card__side--back">
                            <div className="card__tech-logos">
                                    <img src="./public/assets/greyscale-logos/node.png" alt="node logo" className="card__logo-img "/>
                                    <img src="./public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/mongodb.png" alt="mongodb logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/sequelize.png" alt="sequelize logo" className="card__logo-img "/>
               
                                    <img src="../../public/assets/greyscale-logos/postgresql.png" alt="postgresql logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/redux.png" alt="redux logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/github.png" alt="github logo" className="card__logo-img "/>
                    
                                    <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="card__logo-img "/>
                           
                                    <img src="../../public/assets/greyscale-logos/threejs.png" alt="threejs logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/tensorflow.png" alt="tensorflow logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/googlecloud.png" alt="google cloud logo" className="card__logo-img "/>
                                    <img src="../../public/assets/greyscale-logos/mapbox.png" alt="mapbox logo" className="card__logo-img "/>
                        
                            </div>
                        </div>
                        <div className="card__side card__side--front">
                            <div className="card__about">
                               
                                <div className="card__text">
                                    <h3 className="heading-quaternary heading-quaternary--dark u-margin-bottom-small">
                                        Hi, Hello!
                                    </h3>
                                    <p className="paragraph paragraph--big paragraph--thick paragraph--dark u-margin-bottom-small">
                                        I'm a Full Stack Software Engineer. I recently pivoted from Graphic Design because the tech couldn't keep up with my desire to automate, improve systems, and get under the hood. 
                                    </p>
                                    <p className="paragraph paragraph--big paragraph--thick paragraph--dark u-margin-bottom-small">
                                    I'm interested in creating memorable user experiences with engaging functionality, captivating design, state-of-the-art tech, and agile code. 
                                    </p>
                                </div>
                                <div className="card__text">
                                    <p className="paragraph paragraph--big paragraph--thick paragraph--dark u-margin-bottom-small">
                                        As a human, I'm a sci-fi nerd. I love hiking in nature, staying active, noise music and techno. I'm also a vocal advocate for BIPOC and LGBTQ+ rights, Net Neutrality and Climate Action. I was born in Buenos Aires, Argentina; I'm bilingual. I'm married to my incredible wife Stella, we have two really cute and spoiled cats. Find out more in &nbsp;
                                        <a href="#biopopup" className="paragraph paragraph--link" onClick={(e) => this.noFlip(e)}>
                                             my bio
                                        </a> &nbsp; !
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card__button-container">
                            <a
                                onClick={() => this.handleFlip() } 
                                className="card__button-container--left btn btn--white u-margin-bottom-medium">
                                    { this.state.text } &#x219F;
                            </a>
                        
                            <a href="#projects"
                            className="card__button-container--right btn btn--white u-margin-bottom-medium">
                                View Projects &#x21B4;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="intro__shape">
                    <img className="intro__shape intro__shape--main" src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206968/G-Dev/imgs/imgs_composition-02_e0atux.svg"></img>
                </div>
                <section className="popup" id="biopopup">
                    <div className="popup__content popup__content--bio">
                        <img src="public\assets\imgs\blue-G-300.jpg" alt="Giselle headshot in blue" className="popup__image--headshot"/>
                        <a href="#intro" className="popup__close">&times;</a>
                        <div className="popup__text--bio">
                            <h2 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Hi again!
                            </h2>
                            <p className="paragraph paragraph--light paragraph--big popup__text--bio u-margin-bottom-small">
                                For the previous 10 years, I worked as Graphic and Motion Designer for companies like CBRE, Gensler and Estee Lauder.</p>
                            <p className="paragraph paragraph--light paragraph--big popup__text--bio u-margin-bottom-small">
                                Simultaneously, I worked on side projects, focusing on 3D animation, which meant working with software engineers to develop interactive interfaces, for example, a future inspired Art Museum on the web, created in WebGL and ThreeJS. Or&nbsp; <a href="http://www.dream-space.net/artists/zatonyl/" className="popup__link">this project</a> &nbsp;I built in Unity for Dreamspace. I even built my own &nbsp;<a href="http://www.dream-space.net/artists/zatonyl/" className="popup__link">art portfolio website</a>&nbsp; on Adobe Dreamweaver and Muse. 
                                Projects like these, drove me to really learn programming, so I joined the Grace Hopper Program to kick start my learning. 
                            </p>
                            <p className="paragraph paragraph--light paragraph--big popup__text--bio u-margin-bottom-small">
                                I look forward to creating user focused, agile products, and making a difference in the way technology affects and includes people.
                            </p>
                            <p className="paragraph paragraph--light paragraph--big popup__text--bio u-margin-bottom-small">
                                 As someone who is aware of the structures that make up our world, I have ideals to uphold while working in tech. I believe in net-neutrality, climate action, inclusion, reparations, and transparency. I expect teams and companies to actively work toward bettering our world, and nothing less.
                            </p>
                            <p className="paragraph paragraph--light paragraph--big popup__text--bio u-margin-bottom-small">
                                If you would like to chat or have any questions, email me at gisellezatonyl@gmail.com
                            </p>
                        </div>
                    </div>
                </ section>
            </section>
        )
    }
}