import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

export default function UseCallback() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(20000)
    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])


  return (
    <div>
        <Title/>
        <Display name="Age" display={age}/>
        <Button name="Age" handleClick={handleAge}/>
        <Display name="salary" display={salary}/>
        <Button name="salary"  handleClick={handleIncrement}/>
        
    </div>
  )
}
