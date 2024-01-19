"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [count,setCount] = useState(0)
  const [stopper,setStopper] = useState(false)

  /**
   * useState has two parameres, 1. variable, 2. setter.
   * useEffect has two parametes, 1. call back funciton 2.dependency array
   * useEffect has 3 condition's
   * 1. No Dependency array.
   * 2. Empty Dependency array.
   * 3. Dependency array with parameter
   */


  // * 1. No Dependency array.
  // useEffect(()=>{
  //   setTimeout(()=>{
  //   setCount(count+1)
  //     setStopper(!stopper)
  //   },1000)
  // }) 

  // * 2. Empty Dependency array.
  // useEffect(()=>{
  //   setTimeout(()=>{
  //   setCount(count+1)
  //     setStopper(!stopper)
  //   },1000)

  // },[]) 

  // * 3. Dependency array with parameter
  useEffect(()=>{
    setTimeout(()=>{
    setCount(count+1)
      setStopper(!stopper)
    },1000)

  },[stopper]) 



  return (
    <div
    style={{
      width:"100vw",
      height:"100vh",
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      gap:10
    }}
    >
    <button onClick={()=>setCount(count-1)}>
      -</button> 
    <h1>{count}</h1>
    <button
    style={{
      cursor:'pointer',
      backgroundColor:'red',
      color:'white'
    }}

    onClick={()=>setCount(count+1)}

    >+</button>
    <button
    
    onClick={()=>{
      setCount(0)
      setStopper(true)
    }}
    >Reset</button>
    </div>
  );
}
