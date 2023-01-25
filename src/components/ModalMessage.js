import React from "react"
import styles from "../css/ModalForm.css";
import "../css/ModalForm.css"

export default function ModalMessage(props){
    return(
        <>
        <div className="modal-overlay"/>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
              <div className="modal">
                <div className="modal-header">
                  {/* <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={() => props.setIsOpenMsg(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                  */
                  }
                </div>
                <div className="modal-body">
                  <h3>Oops! Its already booked. Try a different timing or day</h3>
                </div>
          
                <div className="modal-footer">
                    <button
                      className={styles.cancelBtn}
                      onClick={() => props.setIsOpenMsg(false)}
                    >
                      OK
                    </button>
                </div>
            </div>
        </div>
          
        </>
    )
}