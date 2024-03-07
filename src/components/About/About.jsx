import addIcon from '../../assets/Group.png';
import './About.css';

export function About() {
  return (
    <div className='about'>
	  {/*  Иконки, которые используются для оформления, нужно внутри css описывать */}
      <img className='about__icon' src={addIcon} alt='add-icon' />
      <p className='about__text'>
        Для добавления новой организации введите ее название, ИНН или адрес.
      </p>
    </div>
  );
}
