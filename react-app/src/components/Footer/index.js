import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__designed-by'>Designed By:</p>
            <div className='footer__name-link__container'>
                <div className='footer__name-link'>
                    <h3 className='footer__name'>Jonathan Borja</h3>
                    <div className='footer__icons'>
                        <a className='footer__link' href='https://github.com/jborja-one' target="_blank">
                            <i class="fab fa-github-square"></i>
                        </a>
                        <a className='footer__link' href='https://www.linkedin.com/in/jonathan-borja-1a9959172/' target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className='footer__name-link'>
                    <h3 className='footer__name'>Monte Flagg</h3>
                    <div className='footer__icons'>
                        <a className='footer__link' href='https://github.com/theflaggship' target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a className='footer__link' href='https://www.linkedin.com/in/montgomeryflagg/' target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className='footer__name-link'>
                    <h3 className='footer__name'>Pierre Guilbault</h3>
                    <div className='footer__icons'>
                        <a className='footer__link' href='https://github.com/TheGuilbotine' target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a className='footer__link' href='https://www.linkedin.com/in/pierre-guilbault-30020549/' target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className='footer__name-link'>
                    <h3 className='footer__name'>Sunny Mallick</h3>
                    <div className='footer__icons'>
                        <a className='footer__link' href='https://github.com/sunnymallick' target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a className='footer__link' href='https://www.linkedin.com/in/sunny-mallick-896a33169/' target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
