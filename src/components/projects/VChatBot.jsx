import React, { Component } from "react"

export default class VChatBot extends Component {
    constructor(){   
        super() 
        this.state= {
            main: "video",
            mainPhoto: "",
            alt: "Demo Video"
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()

        let imageSrc = e.target.src
        let mainSrc = imageSrc
        // imageSrc.slice(0, (imageSrc.length - 10)).concat(".JPG")

        if (e.target.alt === "VChatBot Demo Video"){
            this.setState({
                main: "video",
                mainPhoto: "",
                alt: e.target.alt
            })
        }   else {
            this.setState({
                main: "photo",
                mainPhoto: mainSrc,
                alt: e.target.alt
            })

        }
    }

    render(){
        return(
            <section className="projects__vchatbot projects__section" id="vchatbot">
                <div className="row">
                    <div className="projects__header projects__header--titles">
                        <h1 className="heading-primary heading-primary--sub heading-primary--shadow"> Vi Chat Bot </h1>
                    </div>
                    <div className="col-1of3">
                        <div className="projects__description projects__description--description">
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                 Vi Chat Bot is an app developed during NYC Coders for Black Lives Matter Hackathon. The app was created to help the Center for Racial Justice in Education disseminate their learning resources, by engaging their community in conversation, and facilitating access with a chat bot built-in to their website, as well as Facebook Messenger. The bot was trained using Google's DialogFlow API, integrated into a PWA React.js application, using BotCopy.
                            </p>
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Developers : Youssouf da Silva, Liang Liang, Vanessa Corlette, Giselle Zatonyl, and Jessica Choi; Project Manager: Marc Luna; UI/UX Designer: Rae Shambrook
                            </p>
                            <div className="projects__description__button--links">
                                <a href="http://vi-bot.surge.sh/" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small">
                                    Project Site
                                </a>
                                <a href="https://github.com/HackforBLM/v-chat-bot" 
                                    rel="noopener noreferrer"
                                    target="_blank"

                                    className="btn btn--white u-margin-top-small">
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow">
                            <div className="slideshow__main">
                                {
                                    this.state.main === "video" ? (
                                        <iframe  src="https://www.youtube.com/embed/Oce-vPC8BI8" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="slideshow__video-big" />
                                    ) : (
                                        <img src={this.state.mainPhoto} alt={this.state.alt} className="slideshow__img-big"/>
                                
                                    )
                                }
                            </div>
                            <div className="slideshow__line"></div>
                            <div className="slideshow__thumbs">
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206986/G-Dev/imgs/imgs_v-homepage_m38cid.jpg" 
                                        alt="VChatBot Home" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)} 
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206980/G-Dev/imgs/imgs_v-how_jh5efv.jpg"  
                                        alt="VChatBot How" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">    
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206969/G-Dev/imgs/imgs_v-why_aw8wis.jpg" 
                                        alt="VChatBot Why" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206968/G-Dev/imgs/imgs_v-footer_vagexh.jpg" 
                                        alt="VChatBot Footer" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206965/G-Dev/imgs/imgs_v-video_pov2rm.jpg" 
                                        alt="VChatBot Demo Video" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="u-margin-bottom-mobile">
                        <div className="projects__description projects__description--15">
                            <div className="projects__tech-logos">
                                <div className="projects__tech-logos__wrapper">
                                        <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                        <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/googlecloud.png" alt="googlecloud logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--35">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                My role
                            </h3>
                            <ul className="list u-margin-bottom-medium">
                                    <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                        Researched the best chat bot technology for our purpose and how to use it. Eventually selected Google DialogFlow from three similar options.
                                    </li>
                                    <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                        Designed conversation pattern to use for different directions the user could take during interactions. 
                                    </li>
                                    <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                        Trained the bot using Google DialogFlow Platform
                                    </li>
                                    <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                        Integrated the bot into our Node.js React environment.
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-1of2">
                        <div className="projects__description projects__description--35">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Challenges
                            </h3>
                            <ul className="list u-margin-bottom-medium">
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Our biggest challenge was the integration of our bot. Initially, we used DialogFlow's Facebook integration into our stand-alone page. This presented two problems, we were unable to customize the chat box UI, and created a Facebook dependency we thought would
                                    ultimately be problematic. We kept the Facebook integration, and additionally duplicated our conversation training data on a stand alone integration we could use on our Vi site, as well as on the Center for Racial Justice Site.
                                </li>
                            </ul>
                        </div>
                        <div className="projects__description__button projects__description__button--arrow">
                            <a href="#coocucachew" className="btn">
                                <img src="public\assets\imgs\g-dev-site\fast-down-arow-01.svg" alt="scroll down to next project" className="btn btn--black btn--black--image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}