import PartyItem from "../PartyItem/PartyItem";

export default function PartyList({ list, removeParty }) {

  return (
    <ul className='party__list'>
      {list.map((item) => <PartyItem key={item.values.id} item={item} removeParty={removeParty}/>)}
    </ul>
  );
}
