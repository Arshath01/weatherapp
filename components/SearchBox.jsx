import Link from 'next/link'
import React,{ useState} from 'react';

export default function SearchBox({data}){
    const [value,setValue] = useState("")
    const refValue = value.length>3 && value.toLowerCase();
    console.log(data)

    const name = getName({data,refValue});

    return(
        <div className="container mt-4 p-5" id="search_box">
            <input 
            type="text" 
            value={value}
            className="w-100 form-control"
            placeholder='Search City...'
            onChange={e=>setValue(e.target.value)}
        />
        {value.length>3 &&
        <ul className='list-unstyled p-2 bg-light mt-1 border border-primary rounded'>
        {name.length>0 ? name.map(name=>
        <li>
            <Link 
                className='bg-light'
                id="search_elements" 
                href={`./location/${name.name}`}>{name.name}
            </Link>
        </li> 
        ): <li>No Result Found</li>}
    </ul>}
        </div>
    )
}

function getName({data,refValue}){
    const matchingName = []
    const match =data.filter(name=>name.name.toLowerCase().includes(refValue));
    matchingName.length < 5 && match.map(match=>matchingName.push(match))
    return match;
}
