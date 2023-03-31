import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Button from './Button'
import Info from './Info'
import Title from './Title'


const ContainerDemo = () => {

    const[age,setAge] = useState(25)
    const[salary,setSalary] = useState(25000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])                                        //by using the useCallback() hook if the age is changed then only setAge(age+1) is executed if not [age] is executed

    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1)
    },[salary])

/*
    const incrementAge =()=>{
        setAge(age + 1)
    }

    const incrementSalary =()=>{
        setSalary(salary + 1000)
    }
*/

    return (
        <div>
            <Title />
            <Info title="Age" value={age} />
            <Button action={incrementAge} title="Increment Age" />
            <hr />
            <Info title="Salary" value={salary} />
            <Button action={incrementSalary} title="Increment Salary" />
        </div>
    )
}

export default ContainerDemo