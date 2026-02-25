import { Link } from 'react-router-dom';
// import ProjectItem from '../projectItem/ProjectItem';
import ProjectItem from '../../projectItem/ProjectItem';
import PortfolioIcon from '/flechasLaura/FLECHA WEB-02.svg';
import './Featured.css'

function Featured({ t, projects = [], language, getRoute }) {
    const getProjectById = (id) => projects.find(project => project.id === id);

    const artazaProject = getProjectById("001");
    const swipeProject = getProjectById("002");
    const nwhrProject = getProjectById("005");
    const machimbaProject = getProjectById("003");
    // const lishomProject = getProjectById("004");
    // const flabelusProject = getProjectById("006");
    const azarProject = getProjectById("008");
    const jotaProject = getProjectById("009");
    const bhProject = getProjectById("010");
    const summitProject = getProjectById("011");

    return (
        <div className='featured'>
            <div className='first-line-ft'>
                <div className='column1'>
                    <div className='project-item-container'>

                        {jotaProject && (
                            <ProjectItem
                                project={jotaProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div>
                    <div className='project-item-container'>

                        {azarProject && (
                            <ProjectItem
                                project={azarProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div>
                </div>
                <div className='column2'>
                    <div className='project-item-container'>
                        {bhProject && (
                            <ProjectItem
                                project={bhProject}
                                language={language}
                                className="project-full"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='second-line-ft'>
                <div className='column2'>
                    <div className='project-item-container'>

                        {nwhrProject && (
                            <ProjectItem
                                project={nwhrProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div>
                </div>
                <div className='column1'>
                    <div className='project-item-container'>
                    </div>
                    {/* <div className='project-item-container'>
                        {lishomProject && (
                            <ProjectItem
                                project={lishomProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div> */}
                    <div className='project-item-container'>
                        {swipeProject && (
                            <ProjectItem
                                project={swipeProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='second-line-ft'>
                <div className='column2'>
                    <div className='project-item-container'>

                        {/* {nwhrProject && (
                            <ProjectItem
                                project={nwhrProject}
                                language={language}
                                className="project-half"
                            />
                        )} */}
                    </div>
                </div>
                <div className='column1'>
                    <div className='project-item-container'>
                        {summitProject && (
                            <ProjectItem
                                project={summitProject}
                                language={language}
                                className="project-half"
                            />
                        )}
                    </div>
                    <div className='project-item-container'>
                        {/* {swipeProject && (
                            <ProjectItem
                                project={swipeProject}
                                language={language}
                                className="project-half"
                            />
                        )} */}
                    </div>
                </div>
            </div>
            <div className='third-line-ft'>
                <Link to={getRoute('portfolio')} className="nav-link">
                    <h1>{t('viewPortfolio')} <img src={PortfolioIcon} alt="portfolio icon" className="portfolio-icon" /></h1>
                </Link>
            </div>
        </div>
    )
}

export default Featured;