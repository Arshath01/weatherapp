import Link from 'next/link'
import React,{ useState} from 'react';

export default function SearchBox({data}){
    const [value,setValue] = useState("")
    const refValue = value.length>3 && value;
    console.log(data)

    const name = getName({data,refValue});

    return(
        <div className="search">
            <input 
            type="text" 
            value={value}
            onChange={e=>setValue(e.target.value)}
        />
        <ul>
            {name.map(name=><li><Link href={`./location/${name.name}`}>{name.name}</Link></li>)}
        </ul>
        </div>
    )
}

function getName({data,refValue}){
    const matchingName = []
    const match =data.filter(name=>name.name.includes(refValue));
    matchingName.length < 5 && match.map(match=>matchingName.push(match))
    
    return match;
}
