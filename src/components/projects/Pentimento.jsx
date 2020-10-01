import React, { Component } from "react"

export default class Pentimento extends Component {
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

        if (e.target.alt === "Pentimento Video"){
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
            <section className="projects__pentimento  projects__section" id="pentimento">
                <div className="row">
                    <div className="projects__header projects__header--titles">
                        <h1 className="heading-primary heading-primary--sub heading-primary--shadow"> Pentimento </h1>
                    </div>
                    <div className="col-1of3">
                        <div className="projects__description projects__description--description-sm">
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Pentimento is a mobile-first web application for finding and uploading street art around New York City. It was created for artists, historians, and art enthusiasts to keep track of ephemeral pieces that may be here today but gone tomorrow.
                            </p>
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Pentimento was built during the Grace Hopper Software Engineering program, as the Capstone project. The team members were Angie Spears, Giselle Zatonyl, Saj King, and Chelsea Church. Watch the our demo video to learn about our process and tech stack.
                            </p>
                            <div className="projects__description__button--links">
                                <a href="https://pentimentostreet.herokuapp.com/" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small-medium">
                                    Project Site
                                </a>
                                <a href="https://github.com/Phantom-Blue/phantom-blue" 
                                    rel="noopener noreferrer"
                                    target="_blank"

                                    className="btn btn--white u-margin-top-small-medium ">
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
                                        <iframe  src="https://www.youtube.com/embed/ZBzauWZc4Gk" 
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
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206964/G-Dev/imgs/imgs_pentimento-video_qqgtxj.jpg" 
                                        alt="Pentimento Video" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)} 
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206970/G-Dev/imgs/imgs_pentimento-homepage_l322pm.jpg"  
                                        alt="Pentimento Homepage" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            
                                <div className="slideshow__thumb-wrap">    
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206968/G-Dev/imgs/imgs_pentimento-artgallery_w7ew9r.jpg" 
                                        alt="Pentimento Gallery View" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206980/G-Dev/imgs/imgs_pentimento-map_gqgpog.jpg" 
                                        alt="Pentimento Map" 
                                        className="slideshow__thumb"
                                    />
                                </div>
                            
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206986/G-Dev/imgs/imgs_pentimento-mapart_lefsem.jpg" 
                                        alt="Pentimento Map Pin Artwork" 
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
                                    <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img" />
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/react.png" alt="react logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/postgresql.png" alt="postgresql logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/mapbox.png" alt="mapbox logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/sequelize.png" alt="sequelize logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                                </div>
                                <div className="projects__tech-logos__wrapper">
                                    <img src="../../public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img "/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1of2">
                        <div className="projects__description projects__description--45">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                My role
                            </h3>
                            <ul className="list u-margin-bottom-medium">
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Designed relational database schema.
                                </li>
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Designed API calls for Artworks, and location using Axios on the front end.
                                </li>
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Managed Artwork and Location State on the front end, using Redux, and Secure Local Storage respectively.
                                </li>
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Constructed server responses and error handling on the back end, using Express and Sequelize.
                                </li>
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Composed map and search bars using React and MapboxGL API
                                </li>
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    Deviced Artwork Slideshows using React
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1of2">
                        <div className="projects__description projects__description--55">
                            <h3 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                                Challenges
                            </h3>
                            <ul className="list u-margin-bottom-medium">
                                <li className="list__item paragraph paragraph--light paragraph--medium-large">
                                    We were asked to create our app in two weeks, and in a way, our ambition hurt us the most in these circumstances. 
                                    We were too excited to learn and use the MapboxGL API, and did not plan for growth in the architecture of our map component. Ultimately, the map had to be refactored a few times to accomodate new features. It is an understatement 
                                    to say I understand the value of designing for growth. Planning and brainstorming for future proofing is an extremely important task in the development process.
                                </li>
                                {/* <li className="list__item">
                                    Another great challenges brought on by our map sutation was a teammate disagreement on the features to keep, 
                                    as our deadlines loomed closer and the debugging tasks grew. The feature in question was "Nearby Artworks", which 
                                    as our map stood, couldn't accormodate it. Our map was doing too many things. We resolved it by calling a team meeting,
                                    and brainstorming solutions, how to alter the map component to fit this feature and was it worth the trouble. 
                                    Our team meeting was fruitful, and after moving a few parts around, and making others efficient, we were able to keep the feature.
                                </li> */}
                            </ul>
                            
                        </div>
                        <div className="projects__description__button projects__description__button--arrow">
                            <a href="#vchatbot" className="btn">
                                <img src="public\assets\imgs\g-dev-site\fast-down-arow-01.svg" alt="scroll down to next project" className="btn btn--black btn--black--image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}