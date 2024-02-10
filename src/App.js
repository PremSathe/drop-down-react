import { useState } from 'react';
import './App.scss';
import Multiselect from "multiselect-react-dropdown"

const App = () => {
  const[options,setoptions] = useState(['options1','options2','options3','options4'])
  const[selected,setselected] = useState([])
  console.log("SELECTED VALUES",selected)
  return (
    <div id="root">
    {/* <div>J
      <h1>Multiple Select Box</h1>
    </div> */}
    <div className="center">
  <Multiselect options={options} isObject={false} 
  hideSelectedList={true}  
  showCheckbox onselect={(event)=>{setselected(event)}} onSelect={(event) =>{setselected(event)}} onRemove={(event)=>{setselected(event)}}/>
    </div>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.scss';

// function App() {
//   return (
//     <body>
//       <noscript>You need to enable JavaScript to run this app.</noscript>
//       <div id="root">
//         <div className="center">
//           <div>
//             <div className="multiselect-container multiSelectContainer" id="multiselectContainerReact">
//               <div className="search-wrapper searchWrapper">
//                 <input
//                   type="text"
//                   className="searchBox"
//                   id="search_input"
//                   name="search_name_input"
//                   placeholder="Select"
//                   autoComplete="off"
//                   value=""
//                 />
//               </div>
//               <div className="optionListContainer displayNone">
//                 <ul className="optionContainer">
//                   <li className="option highlightOption highlight">
//                     <input
//                       type="checkbox"
//                       readOnly
//                       className="checkbox"
//                     />options1
//                   </li>
//                   <li className="option">
//                     <input
//                       type="checkbox"
//                       readOnly
//                       className="checkbox"
//                     />options2
//                   </li>
//                   <li className="option">
//                     <input
//                       type="checkbox"
//                       readOnly
//                       className="checkbox"
//                     />options3
//                   </li>
//                   <li className="option">
//                     <input
//                       type="checkbox"
//                       readOnly
//                       className="checkbox"
//                     />options4
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// }

// export default App;
