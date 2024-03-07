import logoImage from '../../assets/Group 2.png';
import './Header.css'

const dadataUrl = 'https://dadata.ru/';

export function Header() {
  return (
    <header className='header'>
      <a href={dadataUrl} className='header__logo'>
	    {/* Логотип должен быть svg */}
        <img className='logo__image' src={logoImage} alt='logo' />
      </a>
    </header>
  );
}
