import Link from 'next/link'
import React, { useState } from 'react';

export default function SearchBox({ data }) {
   const [value, setValue] = useState("")
   const refValue = value.length > 3 && value.toLowerCase();
   console.log(data)

   const name = getName({ data, refValue });
   const famousCities = {
      london: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600",
      newyork: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600",
      dubai: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=600",
      paris: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=600"
   }

   return (
      <>
         <div className="container mt-4 p-5" id="search_box">
            <input
               type="text"
               value={value}
               className="w-100 form-control"
               placeholder='Search City...'
               onChange={e => setValue(e.target.value)}
            />
            {value.length > 3 &&
               <ul className='list-unstyled p-2 bg-light mt-1 border border-primary rounded'>
                  {name.length > 0 ? name.map(name =>
                     <li>
                        <Link
                           className='bg-light'
                           id="search_elements"
                           href={`./location/${name.name}`}>{name.name}
                        </Link>
                     </li>
                  ) : <li>No Result Found</li>}
               </ul>}
         </div>
         <div class='d-flex flex-wrap gap-2 justify-content-center align-items-center mx-auto' id='cities_wrap'>
  <div class='text-center'>
    <Link href='./location/london'>
      <img class='rounded' id='famousCities' src={famousCities.london} alt='london' />
    </Link>
    <h5>London</h5>
  </div>
  <div class='text-center'>
    <Link href='./location/New york'>
      <img class='rounded' id='famousCities' src={famousCities.newyork} alt='newyork' />
    </Link>
    <h5>New York</h5>
  </div>
  <div class='text-center'>
    <Link href='./location/Dubai'>
      <img class='rounded' id='famousCities' src={famousCities.dubai} alt='dubai' />
    </Link>
    <h5>Dubai</h5>
  </div>
  <div class='text-center'>
    <Link href='./location/Paris'>
      <img class='rounded' id='famousCities' src={famousCities.paris} alt='paris' />
    </Link>
    <h5>Paris</h5>
  </div>
</div>

      </>
   )
}

function getName({ data, refValue }) {
   const matchingName = []
   const match = data.filter(name => name.name.toLowerCase().includes(refValue));
   matchingName.length < 5 && match.map(match => matchingName.push(match))
   return match;
}
