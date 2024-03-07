import './Party.css';

export function Party({ partyItem, ...props }) {
  let findEqualParty = partyItem.find((item) => item?.values.id == props.id)
    ? true
    : false;

  function saveData() {
    props.onClick(props);
  }

  return (
    <div key={props.id}>
      <h2 className='party__info_title'>{props.value}</h2>
      <div className='info__container'>
        <div className='info__party'>
          <p className='party__title'>Юридический адрес</p>
          <p className='party__text'>{props.address}</p>
          <p className='party__title'>Генеральный директор</p>
          <p className='party__text'>{props.name}</p>
        </div>
        <div className='info_general'>
          <div className='general-s'>
            <p>ИНН</p>
            <p>КПП</p>
            <p>ОГРН</p>
          </div>
          <div className='general-ext'>
            <p>{props.inn}</p>
            <p>{props.kpp}</p>
            <p>{props.ogrn}</p>
          </div>
        </div>
      </div>
      {findEqualParty ? (
        <button className='party__button_saved' type='submit'>
          Сохранено
        </button>
      ) : (
        <button className='party__button' type='submit' onClick={saveData}>
          Сохранить
        </button>
      )}
    </div>
  );
}
