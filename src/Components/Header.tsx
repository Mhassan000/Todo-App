import React from 'react';
import styles from '@/styles/Home.module.css'
import InputModel from '@/Components/InputModel';
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';

const Header = () => {
  const { toggle, setToogle } = useContext(Context)
  const ModelHandler = () => {
    setToogle(!toggle)
  }
  return (
    <>
      <div className={styles.header}>
        <h1>TodoApp</h1>
        <button className={styles.addtodobtn} onClick={ModelHandler}>Add Todo</button>
      </div>
      {toggle && <InputModel/>}
    </>
  )
}

export default Header