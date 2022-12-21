import logo from './logo.svg';
import './App.css';
import { OtpInput } from './Components/PinInput';
import { Accordian } from './Components/Accordian';
import { useRef } from 'react';

function App() {
  const handleChange=()=>{
    
  }

  // const ref= useRef(9)
  const data = [
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Tab 1",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Tab 2",
    }
  ];

  // console.log(ref.current)
  return (
    <div className="App">
     <OtpInput totalInputs={4} onChange={handleChange}/>
     <Accordian data={data}/>
    </div>
  );
}

export default App;
