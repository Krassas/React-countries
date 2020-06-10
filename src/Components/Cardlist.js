import React from 'react';
import Card from './Card';
import'../CSS/Cardlist.css';

const CardList = ({countryData}) => {
    
   
    

    const cardComponent = countryData.map((data, i) =>
    {
        
        const lang = data.languages.map((languageName) => {

            return languageName.name

        })

        const curr = data.currencies.map((currencyName) => {

            return currencyName.name

        })

        return <Card key={i} name={countryData[i].name} capital={countryData[i].capital} flag={countryData[i].flag} language={lang} currency={curr}/>
    }
      )
    return (
        <div id="cards">
            {cardComponent}
        </div>
    );
}

export default CardList;