import React, {useState} from 'react'


const Tic = () => {  

function handleclick() { 
  // if(btn.value=" "){
  //     btn.value = chk
  // }
  // if(chk=="X"){
  //     chk = "O"
  // }
  // else{
  //     chk="X"
  // }

}
   
  return (
    <>
    <div>
      
      <div className='board-input'>
        <form name='tictactoe' method='POST'>
        <table className='table-head'>
       <tr> 
   <td><input type="button" name='btn1' id='button1' value="" onClick={handleclick(this)} /></td>
   <td> <input type="button" name='btn2' id='button2'  value="" onClick={handleclick(this)} /></td>
   <td> <input type="button" name='btn3' id='button3'  value="" onClick={handleclick(this)} /></td>

    </tr>
    <tr> <td> <input type="button" name='btn4' id='button1' value="" onClick={handleclick(this)} /></td>
    <td> <input type="button" name='btn5' id='button4'  value="" onClick={handleclick(this)} /></td>
    <td> <input type="button" name='btn6' id='button5'  value="" onClick={handleclick(this)} /></td>
    </tr>
    <tr>
    <td> <input type="button" name='btn7' id='button6'  value="" onClick={handleclick(this)} /></td>
    <td> <input type="button" name='btn8' id='button7'  value="" onClick={handleclick(this)} /></td>
    <td> <input type="button" name='btn9' id='button8'  value="" onClick={handleclick(this)} /></td>
    </tr>
    </table>
    </form>
    </div>

<table>
    <tr><td><span> player X </span> <input type="text" name='playerX' id='PlayerX'  value="0" /></td> 
    <td><span> player O </span> <input type="text" name='playerO' id='PlayerO'  value="0" /></td> </tr>
    <tr><td><input type="button" name='Restart' id='Restart'  value="Restart" /></td> 
    <td><input type="button" name='Reset' id='Reset'  value="Reset" /></td> </tr>
</table>


    </div>
    </>
  )
};



export default Tic;



//   }
//   return (
//     <>
//   <div className='board-head'>
//     <div className='board'>
       
//         <div className='board-inner'>
        
//          <Square value={state} handleClick={handleClick} />
//          <Square value={state} handleClick={handleClick} />
//          <Square value={state} handleClick={handleClick} />
 
//         </div>

//     </div>
//       <div className='board'>
//       <div className='board-inner'>
//       <Square value={state} handleClick={handleClick} />
//       <Square value={state} handleClick={handleClick} />
//       <Square value={state} handleClick={handleClick} />
//       </div>

//   </div>
//   <div className='board'>
//       <div className='board-inner'>
//       <Square value={state} handleClick={handleClick} />
//       <Square value={state} handleClick={handleClick} />
//       <Square value={state} handleClick={handleClick} />
//       </div>

//   </div>
//    <div className='history'>
//     X Win's : {}
//     <br/>
//     O Win's : {}
//     <br/>
//     Draw Game:{}
//    </div>
//   </div>
  
//  </>
//)












