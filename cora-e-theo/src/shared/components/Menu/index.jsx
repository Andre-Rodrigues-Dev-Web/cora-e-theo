import { useState, useRef } from 'react';
import { ContainerMenu } from './style';
import logoCoraeTheo from '../../assets/imgs/logo.png';
import Links from './Links';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const containerLinksRef = useRef(null); // Cria uma referência para a div interna

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        if (containerLinksRef.current && !isMenuVisible) {
            containerLinksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ContainerMenu>
            <div className="content-menu">
                <div className="logo">
                    <Link>
                        <img src={logoCoraeTheo} alt="Logo Cora e Theo" srcSet={logoCoraeTheo} />
                    </Link>
                </div>
                <div className="button-responsive">
                    <button onClick={toggleMenu}>
                        <div></div>
                    </button>
                </div>
                <div
                    ref={containerLinksRef}
                    className={`container-links ${isMenuVisible ? 'show' : ''}`}
                >
                    <Links />
                </div>
            </div>
        </ContainerMenu>
    );
}

export default Menu;
