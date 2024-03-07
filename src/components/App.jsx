/* eslint-disable no-unused-vars */
import React, { useState, useId, useEffect } from 'react';
import { PartySuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import './App.css';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Party } from './Party/Party';
import PartyList from './PartyList/PartyList';

const api = 'e98e3ef631336c732b056663319ce4e8ff902aca';

export default function App() {
  let partySuggestionId = useId();
  let [suggestData, setSuggestData] = useState();
  // Название переменной неудачное. Гораздо понятнее было бы "partyItems"
  let [partyItem, setPartyItem] = useState(() => {
    const savedData = localStorage.getItem('partyItem');
    const initialValue = JSON.parse(savedData);
    return initialValue || [];
  });

  // Лучше эту логику перенести в компонент Party
  function nameOfType() {
	  // Зачем вообще тут нужна переменная name?
    let name;
    if (
      suggestData.data.management === null ||
      suggestData.data.name === null
    ) {
      return (name = 'Данные отсутствуют');
    }
    if (suggestData.data.type === 'LEGAL') {
      return (name = suggestData.data.management.name);
    }
    if (suggestData.data.type === 'INDIVIDUAL') {
      return (name = suggestData.data.name.full);
    }

    return name;
  }

  function handleAddParty(values) {
	  // Когда для установки стейта используется предыдущее значение, надежнее использовать колбек.
	  // setPartyItem((prevValue) => ...)
    setPartyItem([...partyItem, { values }]);
  }

  function removeParty(id) {
    setPartyItem(partyItem.filter((party) => party.values.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('partyItem', JSON.stringify(partyItem));
  }, [partyItem]);

  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='title'>Мои организации</h1>
        <div className='App'>
	      {/* Для табов можно было и не использовать npm пакет. */}
          <Tabs className='Tabs'>
            <TabList>
              <Tab>Новая организация</Tab>
              <Tab>
                Сохраненые организации{' '}
                <span className='counter'>({partyItem.length})</span>
              </Tab>
            </TabList>
            <TabPanel>
              <div>
                <form className='searchForm'>
                  <label htmlFor='party' className='party'>
                    Организация или ИП
                  </label>
                  <PartySuggestions
                    className='patry__input'
                    token={api}
                    value={suggestData}
                    onChange={setSuggestData}
                    count={3}
                    inputProps={{
                      placeholder:
                        'Введите название, ИНН или адрес организации',
                    }}
                    uid={partySuggestionId}
                  />
                </form>
                {suggestData ? (
					// Проще было сделать один пропс для suggestData
                  <Party
                    partyItem={partyItem}
                    id={suggestData.data.hid}
                    value={suggestData.value}
                    address={suggestData.data.address.value}
                    name={nameOfType()}
                    inn={suggestData.data.inn}
                    kpp={suggestData.data.kpp}
                    ogrn={suggestData.data.ogrn}
                    onClick={handleAddParty}
                  />
                ) : (
                  <About />
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <PartyList list={partyItem} removeParty={removeParty} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
