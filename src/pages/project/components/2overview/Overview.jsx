import { Fragment } from 'react';
import './Overview.css';

function Overview({ project, language, t }) {
    const overview = project.overview?.[language]?.[0];
    const sector = project.sector?.[language] ?? [];
    // const credits = (project.credits?.[language] ?? []).filter(Boolean);
    const credits = project.credits ?? [];

    return (
        <div className='overview-section'>
            <div className='overview-empty'></div>
            <div className='overview-included'>
                <div className='paragraph-overview'>
                    {overview && (
                        <>
                            <h2>{t('overview')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: overview }} />
                        </>
                    )}
                </div>
                <div className='paragraph-overview'>
                    {sector.length > 0 && (
                        <>
                            <h2>{t('sector')}</h2>
                            <p>{sector.join(', ')}</p>
                        </>
                    )}
                </div>
                {/* <div className='paragraph-overview'>
                    {credits && (
                        <>
                            <h2>{t('credits')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: credits }} />

                        </>
                    )}
                </div> */}
                {/* <div className='paragraph-overview'>
                    {credits.length > 0 && (
                        <>
                            <h2>{t('credits')}</h2>
                            <ul className='credits-list'>
                                {credits.map((credit, index) => (
                                    <li key={index}>
                                        <span className='credit-function'>{credit.function[language]}</span>
                                        {credit.link ? (
                                            <a href={credit.link} target="_blank" rel="noopener noreferrer">
                                                {credit.name}
                                            </a>
                                        ) : (
                                            <span className='credit-name'>{credit.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div> */}
                <div className='paragraph-overview'>
                    {credits.length > 0 && (
                        <>
                            <h2>{t('credits')}</h2>
                            <dl className='credits-list'>
                                {credits.map((credit, index) => (
                                    <Fragment key={index}>
                                        <dt className='credit-function'>{credit.function[language]}</dt>
                                        <dd className='credit-name'>
                                            {credit.link ? (
                                                <a
                                                    href={credit.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='credit-link'
                                                >
                                                    {credit.name}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className='credit-arrow'
                                                        aria-hidden="true"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                credit.name
                                            )}
                                        </dd>
                                    </Fragment>
                                ))}
                            </dl>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Overview;