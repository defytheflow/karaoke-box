import React from "react"

import { ModalContext } from '../pages/index';
import * as styles from './modal.module.css';

export default function Modal() {
  const { setShow } = React.useContext(ModalContext);

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <button className={styles.modalClose} onClick={() => setShow(false)}>&times;</button>
        <h1>Modal Title</h1>
      </div>
      <div className={styles.modalBody}>
        <p>Modal Body.</p>
      </div>
    </div>
  )
}