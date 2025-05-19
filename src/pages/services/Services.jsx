import './Services.css'

function Services() {
    return (
        <div className='services-wrapper'>
            <div className='statement'>
            <h1>Agencia creativa para marcas con propósito.</h1>
            <h2>Somos un estudio creativo que utiliza la tecnología para expandir la creatividad, guiado por una filosofía clara: Impacto + Intención.</h2>
            <h3>Impacto significa crear experiencias visuales que dejan huella.<br />Intención significa diseñar con propósito, sensibilidad y coherencia.</h3>
            </div>

            <div className='services-list'>
                <div className='services-title'>
                    <h1>Servicios</h1>
                </div>
                <div className='services-display'>
                    <ul>
                        <li>Diseño Web</li>
                        <li>Desarrollo Full Stack</li>
                        <li>Fotografía</li>
                        <li>Dirección Creativa</li>
                        <li>Branding</li>
                        <li>Identidad de marca</li>
                        <p></p>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Services;