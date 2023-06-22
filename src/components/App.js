
import React,{useState} from "react";
import Modal from "./Modal";
import './../styles/App.css';

const App = () => {

  const[display, setDisplay] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <button className="model-overlay" onClick={()=> setDisplay(true)}>Show Modal</button>
        <Modal  display={display} onClose={()=> setDisplay(false)} >
            <p>This is the content of the modal.</p>
        </Modal>
    </div>
  )
}

export default App
