import React from "react";

const Modal = ({display, onClose, children})=>{

    if (!display) {
        return null;
     }
  
     return (
        <div className="modal-overlay" onClick={onClose}>
           <div className="modal">
              <button className="modal-close" onClick={onClose}>
                 Close
              </button>
              {children}
           </div>
        </div>
     );
   
}
export default Modal