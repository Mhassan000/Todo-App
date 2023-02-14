import React from 'react'
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';
import { AiFillDelete } from "react-icons/ai";
import styles from '@/styles/Home.module.css';
import { AiFillCheckSquare } from "react-icons/ai"
import { AiFillCloseSquare } from "react-icons/ai"

const Todos = () => {

    const { arr, setArr } = useContext(Context)

    const deleteTodo = (idx: any) => {
        const filteredData = arr.filter((item: any, curridx: number) => {
            return curridx !== idx
        });
        setArr(filteredData)
    };

    const handleCheck = (idx: any) => {
        arr[idx].completed = !arr[idx].completed
        setArr([...arr])
    }

    return (
        <>
           
            <div className={styles.TodoContainer}>
                {arr.map((item: any, idx: number) => {
                    return (
                        <div className={styles.TodoItems} key={idx}>
                            <h2 style={{marginBottom: '5px' , textTransform:'capitalize' }}>{item.title}</h2>
                            <div className={styles.line}></div>
                            <p className={styles.Description}>{item.description}</p>
                            <p className={styles.Date}>{item.date}</p>
                            <AiFillDelete className={styles.Deletbtn} onClick={() => deleteTodo(idx)} size={27} />
                            <button className={styles.Check} onClick={() => handleCheck(idx)}>
                                {item.completed ? <AiFillCheckSquare className={styles.IconStyle} size={25} /> : <AiFillCloseSquare className={styles.IconStyle} size={25} />}
                            </button>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default Todos