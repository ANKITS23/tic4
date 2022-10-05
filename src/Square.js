import React, {useState} from 'react'


function Square(props , i) {
  return (
    
    <button key={i} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//  function MapDemo(){
//   const array1 = [1,2,3,4,5];
//   const map1 = array1.map(item => item*2 + ",")
//   return(
//       <h3>{map1}</h3>
//   )
// }



export default Square;