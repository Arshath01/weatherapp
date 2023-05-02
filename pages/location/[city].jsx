import React from 'react';
import WhetherPage from '@/components/WhetherPage';
import jsonData from '@/json/sample'



export default function City({city,matchingCity,fetchedData}) {
    console.log(fetchedData)
    return <WhetherPage {...fetchedData}/>;
  }

  export async function getServerSideProps(context){
    const {city} = context.params;
    const getcity = getCity(city)
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d8ef69b0aad74baaa4e04717230205&q=${city}&days=7&aqi=no&alerts=no`)
    const data = await res.json()
    return {
        props:{
           city:city,
           matchingCity:getcity,
           fetchedData:data,
        }
    }
  }
  
  
  function getCity(city){

    const match = jsonData.find(name => name.name==city);
     if (match){
        return match
     }else {
      return null
     }
  }