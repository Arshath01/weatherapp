import WhetherPage from '@/components/WhetherPage';
import jsonData from '@/json/sample'


export default function City({city,matchingCity,fetchedData}) {
    console.log(fetchedData)
    return <WhetherPage {...fetchedData}/>;
  }

  export async function getServerSideProps(context){
    const {city} = context.params;
    const getcity = getCity(city)
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=4bdc4e74922c4295839143408232904&q=${getcity.name}&aqi=no`)
    const data = await res.json()
    return {
        props:{
           city:city,
           matchingCity:getcity,
           fetchedData:data
        }
    }
  }
  
  
  function getCity(city){

    const match = jsonData.find(name => name.name==city);
     if (match){
        return match
     }
  }