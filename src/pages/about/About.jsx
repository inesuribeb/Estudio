// import './About.css'

// function About() {
//     return (
//         <div className='about-wrapper'>
//             <div className='first-line'>
//                 <div>
//                     <p>Agencia creativa para marcas con propósito.</p>
//                 </div>
//                 <div>
//                     <p>Somos ESTUDIO Ines Uribe, un estudio creativo que utiliza la tecnología para expandir la creatividad humana. Guiadas por una filosofía clara: Impacto + Intención.</p>
//                 </div>
//                 <div>
//                     <p>Impacto significa crear experiencias visuales que dejan huella. Intención significa diseñar con propósito, sensibilidad y coherencia.</p>
//                 </div>
//                 <div>
//                     <p>Colaboramos con marcas que aspiran a algo más: conectar profundamente, diferenciarse con honestidad y expresarse con claridad. Creemos que mostrar tu personalidad es una habilidad poderosa.</p>
//                 </div>
//             </div>
//             <div className='second-line'>
//                 <h1>Estudio IU</h1>
//             </div>
//             <div className='third-line'>
//                 <div className='third-column'>
//                     <ul>
//                         <li>Diseño Web</li>
//                         <li>Desarrollo Full Stack</li>
//                         <li>Fotografía</li>
//                         <li>Dirección Creativa</li>
//                         <li>Branding</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <p>Desde la identidad de marca hasta el desarrollo web completo, creamos productos digitales que fusionan forma y función, belleza y lógica, visión y detalle.</p>
//                 </div>
//                 <div>
//                     <p>Nos encanta lo que hacemos.</p>
//                 </div>
//                 <div className='third-column'>
//                     <p>estudio@inesuribe.es</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;


import './About.css'

function About({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return (
        <div className='about-modal'>
            <button className='about-close-btn' onClick={onClose}>×</button>

            <div className='contact-links-to'>
                <button className='email-c'>estudio@inesuribe.es</button>
                <button className='instagram-c'>INSTAGRAM</button>
                <button className='linkedin-c'>LINKEDIN</button>
                <button className='direction-c'>BILBAO, BASQUE COUNTRY</button>

            </div>
            
            {/* <div className='about-wrapper'>
                <div className='first-line-about'>
                    <div>
                        <p>Agencia creativa para marcas con propósito.</p>
                    </div>
                    <div>
                        <p>Somos ESTUDIO Ines Uribe, un estudio creativo que utiliza la tecnología para expandir la creatividad, guiado por una filosofía clara: Impacto + Intención.</p>
                    </div>
                    <div>
                        <p>Impacto significa crear experiencias visuales que dejan huella.<br />Intención significa diseñar con propósito, sensibilidad y coherencia.</p>
                    </div>
                    <div>
                        <p>Colaboramos con marcas que aspiran a algo más: conectar de forma auténtica, diferenciarse con honestidad y expresarse con claridad. Creemos que mostrar tu personalidad es una habilidad poderosa.</p>
                    </div>
                </div>
                <div className='second-line'>
                <div className='logo-indicator'></div>
                    <h1>Estudio IU</h1>
                </div>
                <div className='third-line'>
                    <div className='third-column'>
                        <ul>
                            <li>Diseño Web</li>
                            <li>Desarrollo Full Stack</li>
                            <li>Fotografía</li>
                            <li>Dirección Creativa</li>
                            <li>Branding</li>
                            <p></p>
                        </ul>
                    </div>
                    <div>
                        <p>Desde la identidad de marca hasta el desarrollo web completo, creamos productos digitales que fusionan forma y función, belleza y lógica, visión y detalle.</p>
                    </div>
                    <div>
                        <p>Nos encanta lo que hacemos.</p>
                    </div>
                    <div className='third-column'>
                        <p>estudio@inesuribe.es</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About;

// import './About.css'

// function About({ isOpen, onClose }) {
//     if (!isOpen) return null;
    
//     return (
//         <div className='about-modal'>
//             <button className='about-close-btn' onClick={onClose}>×</button>
            
//             <div className='about-wrapper'>
//                 <div className='first-line'>
//                     <div>
//                         <p>Agencia creativa para marcas con propósito.</p>
//                     </div>
//                     <div>
//                         <p>Somos ESTUDIO Ines Uribe, un estudio creativo que utiliza la tecnología para expandir la creatividad humana. Guiadas por una filosofía clara: Impacto + Intención.</p>
//                     </div>
//                     <div>
//                         <p>Impacto significa crear experiencias visuales que dejan huella. Intención significa diseñar con propósito, sensibilidad y coherencia.</p>
//                     </div>
//                     <div>
//                         <p>Colaboramos con marcas que aspiran a algo más: conectar profundamente, diferenciarse con honestidad y expresarse con claridad. Creemos que mostrar tu personalidad es una habilidad poderosa.</p>
//                     </div>
//                 </div>
//                 <div className='second-line'>
//                     <div className='title-cutout'>
//                         <h1>Estudio IU</h1>
//                     </div>
//                 </div>
//                 <div className='third-line'>
//                     <div className='third-column'>
//                         <ul>
//                             <li>Diseño Web</li>
//                             <li>Desarrollo Full Stack</li>
//                             <li>Fotografía</li>
//                             <li>Dirección Creativa</li>
//                             <li>Branding</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <p>Desde la identidad de marca hasta el desarrollo web completo, creamos productos digitales que fusionan forma y función, belleza y lógica, visión y detalle.</p>
//                     </div>
//                     <div>
//                         <p>Nos encanta lo que hacemos.</p>
//                     </div>
//                     <div className='third-column'>
//                         <p>estudio@inesuribe.es</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='background-page'></div>
//         </div>
//     )
// }

// export default About;