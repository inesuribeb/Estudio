import Carousel from "../carousel/Carousel";
import './SectionWeb.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';

function SectionWeb({ title, web, description, method, link, images, className }) {
    return (
        <section className={`web-section ${className}`}>
        
            <div className="first-line">
                <h3>
                    <a href={web} target="_blank" rel="noopener noreferrer">
                        # {title} <ArrowOutwardIcon />
                    </a>
                </h3>
                <p className="description">{description}</p>
                <p>{method}</p>
                <p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                </p>
            </div>
            <div className="second-line">
                <Carousel>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default SectionWeb;