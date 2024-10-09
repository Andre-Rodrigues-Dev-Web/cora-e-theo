import { useState } from 'react';
import { ContainerMenu } from './style';
import logoCoraeTheo from '../../assets/imgs/logo.png'
import Links from './Links';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <ContainerMenu>
            <div className="content-menu">
                <div className="logo">
                    <Link>
                        <img src={logoCoraeTheo} alt="Logo Cora e Theo" srcset={logoCoraeTheo} />
                    </Link>
                </div>
                <div className="button-responsive">
                    <button onClick={toggleMenu}>
                        <div></div>
                    </button>
                </div>
                <div className={`container-links ${isMenuVisible ? 'show' : ''}`}>
                    <Links />
                </div>
            </div>
        </ContainerMenu>
    );
}

export default Menu;
