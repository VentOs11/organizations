import { useState } from "react";

import removeIcon from '../../assets/Vector.svg';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import './PartyItem.css'

export default function PartyItem ({removeParty, item}) {
    let [isShow, setIsShow] = useState(false);

    function showInformation() {
        setIsShow(!isShow);
      }
      return (
        <li key={item.values.id} className='party__list_item'>
            <div className='item__info'>
              <h3 className='item__title'>{item.values.value}</h3>
              <p className='item__info_gen'>
                ИНН <span className='item__info_ext'>{item.values.inn}</span>
              </p>
	          {/* Нет смысла через css это скрывать. Просто рендерить только при isShow   */}
              <div className={isShow ? 'show' : 'hide'}>
                <p className='item__info_gen'>
                  КПП <span className='item__info_ext'>{item.values.kpp}</span>
                </p>
                <p className='item__info_gen'>
                  ОГРН{' '}
                  <span className='item__info_ext'>{item.values.ogrn}</span>
                </p>
                <p className='item__info_gen'>
                  Юридический адрес{' '}
                  <span className='item__info_ext'>{item.values.address}</span>
                </p>
                <p className='item__info_gen'>
                  Генеральный директор{' '}
                  <span className='item__info_ext'>{item.values.name}</span>
                </p>
              </div>
            </div>
            <div className='item__buttons'>
              {' '}
              <button
                className='item__remove-button'
                onClick={() => removeParty(item.values.id)}
              >
                <img src={removeIcon} alt='removeIcon' />
              </button>
	          {/*  В чем смысл еще одну функцию создавать в onClick? */}
              <button
                className='item__acc-button'
                onClick={() => showInformation()}
              >
                {!isShow ? 'подробнее ' : 'скрыть подробности '}
	              {/*  Иконки, которые используются для оформления, нужно внутри css описывать */}
                {!isShow ? (
                  <img src={arrowDown} alt='arrow down' />
                ) : (
                  <img src={arrowUp} alt='arrow up' />
                )}
              </button>
            </div>
          </li>
      )
}
