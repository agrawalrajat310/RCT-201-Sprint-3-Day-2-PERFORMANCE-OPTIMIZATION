// import React, { useEffect, useState } from 'react'
// import Hi from './Hi';
// import Page from './Page';

// const Hello = () => {
// const [pages, setPages]= useState(1)
//     const [data, setData]= useState([])

// useEffect(() => {
//     getData()
// }, []);

// console.log(pages);

//     const getData=()=>{
//         fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${pages}&limit=10`)
//         .then((res)=> res.json())
//         .then((res)=>setData(res))
//         .catch((error)=>console.log(error))
//     }




//   return (
//     <div>
//         {
//             data && data.data&& data.data.map((el)=>(
//             <Hi country={el.country} population={el.population}/>
//             ))
//         }

// <Page page={pages} />

//     </div>
//   )
// }

// export default Hello