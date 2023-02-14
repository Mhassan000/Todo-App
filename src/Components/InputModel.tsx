"use-client"

import React from 'react';
import styles from '@/styles/Home.module.css'
import { BiX } from "react-icons/bi";
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';
import uuid from 'react-uuid';

const InputModel = () => {
    const { setToogle, toggle, arr, setArr, input, setInput } = useContext(Context)
    const inputHandler = (e: any) => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}/${month}/${year}`

        const { name, value } = e.target

        setInput({
            ...input,
            id: uuid(),
            date: currentDate,
            [name]: value,
            completed: false
        })
    }
        

    const submitHandler = (e: any) => {
        e.preventDefault()
        setArr([...arr, input])
        setInput({
            title: '',
            description: '',

        });
        setToogle(!toggle)
    }

    const HandleToogler = (e: any) => {
        e.preventDefault()
        setToogle(!toggle)
    }

    return (
        <div className={styles.shadow}>
            <div className={styles.model}>
                <div className={styles.flex}>
                    <h2>Add Todo</h2>
                    <BiX onClick={HandleToogler} className={styles.icon} size={40} />
                </div>
                <div className={styles.form}>
                    <h3 className={styles.h3}>Title</h3>
                    <input className={styles.input} type='text' name='title' value={input.title} onChange={inputHandler} placeholder='Add a task' />
                    <h3 className={styles.h3}>Description</h3>
                    <textarea name='description' value={input.description} className={styles.input} onChange={inputHandler} placeholder='Add your Description ' />
                    <p>Description must have more than 10 characters</p>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={HandleToogler} className={styles.ModelBtn1}>Cancel</button>
                    <button onClick={submitHandler} className={styles.ModelBtn}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default InputModel