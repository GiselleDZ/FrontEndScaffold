import React, { Component } from "react"

export default class ThirdCultMasks extends Component {
    constructor(){   
        super() 
        this.state= {
            mainPhoto: "https://res.cloudinary.com/delu9m4xu/image/upload/v1599206972/G-Dev/imgs/imgs_thirdcult-homepage_jwii5p.jpg",
            alt: "Third Cult Homepage",
            thumb: "slideshow__thumb"
        }
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e){
        e.preventDefault()
        let imageSrc = e.target.src
        let mainSrc = imageSrc
        // imageSrc.slice(0, (imageSrc.length - 10)).concat(".JPG")

        this.setState({
            mainPhoto: mainSrc,
            alt: e.target.alt,
        })
    }

    render(){
        return(
            <section className="projects__thirdcultmasks projects__section" id="thirdcultmasks">
                <div className="row">
                    <div className="projects__header projects__header--titles">
                        <h1 className="heading-primary heading-primary--sub heading-primary--shadow"> Third Cult Masks </h1>
                    </div>
                    <div className="col-1of3">
                        <div className="projects__description projects__description--description-sm">
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Third Cult Masks is a site made to singularly advertise Third Cult's high end masks to retailers that may want to purchase them as wholesale.
                            </p>
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Third Cult Masks was built by me, using primarily vanilla Javascript, CSS3 SASS and Express.
                            </p>
                            <p className="paragraph paragraph--light paragraph--medium-large">
                                Visit on a desktop browser, and you will notice a large percentage of the elements are animated. This project was created largely to practice animating CSS3, SASS and minimal Javascript.
                            </p>
                            <div className="projects__description__button--links">
                                <a href="https://thirdcult-masks.herokuapp.com/" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small-medium">
                                    Project Site
                                </a>
                                <a href="https://github.com/GiselleDZ/ThirdCvltMasks" 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn--white u-margin-top-small-medium">
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2of3">
                        <div className="slideshow slideshow__background">
                            <div className="slideshow__main"> 
                                <img src={this.state.mainPhoto} alt={this.state.alt} className="slideshow__img-big"/>
                            </div>
                            <div className="slideshow__line"></div>
                            <div className="slideshow__thumbs">
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)} 
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206972/G-Dev/imgs/imgs_thirdcult-homepage_jwii5p.jpg"  
                                        alt="Third Cult masks site homepage" 
                                        className={this.state.thumb}
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">    
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206966/G-Dev/imgs/imgs_thirdcult-details_ysdgxy.jpg" 
                                        alt="Third Cult masks details section" 
                                        className={this.state.thumb}
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206968/G-Dev/imgs/imgs_thirdcult-features_syznyd.jpg" 
                                        alt="Third Cult feature cards section" 
                                        className={this.state.thumb}
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206963/G-Dev/imgs/imgs_thirdcult-masks_nzr85c.jpg" 
                                        alt="Third Cult Masks section depicting three masks" 
                                        className={this.state.thumb}
                                    />
                                </div>
                        
                                <div className="slideshow__thumb-wrap">
                                    <img onClick={(e) => this.handleImage(e)}
                                        src="https://res.cloudinary.com/delu9m4xu/image/upload/v1599206975/G-Dev/imgs/imgs_thirdcult-reviews_uh3fjt.jpg" 
                                        alt="Third Cult Mask Reviews section" 
                                        className={this.state.thumb}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="projects__description projects__description--15">
                        <div className="projects__tech-logos">
                            <div className="projects__tech-logos__wrapper">
                                <img src="../../public/assets/greyscale-logos/node.png" alt="node logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">

                                <img src="../../public/assets/greyscale-logos/html5.png" alt="html5 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/css3.png" alt="css3 logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/sass.png" alt="sass logo" className="projects__tech-logos__wrapper projects__tech-logos__wrapper--logo-img"/>
                            </div>
                            <div className="projects__tech-logos__wrapper">
                                
                                <img src="../../public/assets/greyscale-logos/Expressjs.png" alt="Expressjs logo" className="projects__tech-logos__wrapper  projects__tech-logos__wrapper--logo-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="projects__description__button projects__description__button--arrow">
                        <a href="#pentimento" className="btn">
                            <img src="public\assets\imgs\g-dev-site\fast-down-arow-01.svg" alt="scroll down to next project" className="btn btn--black btn--black--image"/>
                        </a>
                    </div>
                </div>
            </section>
            
        )
    }
}