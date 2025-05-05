import PortfolioCarousel from '../portfolioCarousel/PortfolioCarousel';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ShowWebProjects.css'

function ShowWebProjects({ className, title, description, method, web, link, images }) {

    return (
        <section className={`web-section-mobile ${className}`}>

            <div className="first-line-intro">
                <h3>
                    <a href={web} target="_blank" rel="noopener noreferrer">
                        # {title} <ArrowOutwardIcon />
                    </a>
                </h3>

                <p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='github-icon'>
                        See on <GitHubIcon />
                    </a>
                </p>
            </div>

            <div className='second-line-intro'>
                <p className="description">{description}</p>
            </div>

            <div className='third-line-intro'>
                <p>{method}</p>
            </div>
            <div className="second-line">
                <PortfolioCarousel>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </PortfolioCarousel>
            </div>
        </section>
    );
}

export default ShowWebProjects;