import React, { useState } from "react"

const PractiseState = ()=>{
    const [user , setUser] = useState({
        fname : "",
        lname : "",
        email : "",
        password : ""
    })

    const handleInput = (e)=>{
        const name = e.target.name
        setUser({...user , [name] : e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setUser({
            fname : "",
            lname : "",
            email : "",
            password : ""
        })
    }

    console.log(user)
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="fname"></label>
                <input type="text" placeholder="Enter Your Name" name="fname" value={user.fname} onChange={handleInput} id="fname" required />
            </div>
            <div>
                <label htmlFor="lname"></label>
                <input type="text" placeholder="Enter Your lname" name="lname" value={user.lname} onChange={handleInput} id="lname" required />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input type="email" placeholder="Enter Your Email" name="email" value={user.email} onChange={handleInput} id="email" required />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="text" placeholder="Enter Your Password" name="password" value={user.password} onChange={handleInput} id="password" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default PractiseState