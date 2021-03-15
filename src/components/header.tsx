import React from "react"
import { Link } from "gatsby"

import { ModalContext } from '../pages/index';
import * as styles from './header.module.css';

export default function Header() {
  const { setShow } = React.useContext(ModalContext);

  return (
    <header className={styles.header}>
      <Logo width={75} height={45}/>
      <nav className={styles.nav}>
        <Link to='#'>About</Link>
        <Link to='#'>Product</Link>
        <button onClick={() => setShow(value => !value)}>Order</button>
      </nav>
    </header>
  )
}

interface LogoProps {
  width: number;
  height: number;
}

function Logo(props: LogoProps) {
  const { width, height } = props;
  return <img src={`https://source.unsplash.com/random/${width}x${height}`} alt="Karaoke Box Logo"/>
}
