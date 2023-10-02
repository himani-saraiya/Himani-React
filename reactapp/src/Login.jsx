import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

const url = process.env.REACT_APP_BASE_URL


const Login = () => {


  const navigate = useNavigate()



  const handleLogin = (userName, password) => {
    // setIsLoading(true)
 

  }

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={({username, password}, {setSubmitting})=>{
          axios.post(`${url}/auth/login`, {
            username,
            password
          }).then(res => {
            const { token } = res.data
            localStorage.setItem("__authToken__", token)
            toast.success("Logged in successfully.")
            navigate("/products")
          }).catch(err => {
            console.log(err)
            toast.error("Invalid Username or Password !")
          }).finally(() => {
            setSubmitting(false)
          })
          
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => {
          // console.log(values)
          return <form onSubmit={handleSubmit}>
            <input
              type={"text"}
              placeholder="username"
              value={values.username}
              name="username"
              onChange={handleChange}
            /><br />
            <input
              type={"text"}
              placeholder="password"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
            <br />
            <button
            disabled={isSubmitting}
              type='submit'
            >{isSubmitting ? "Wait..." : "Login"}</button>
          </form>

        }}
      </Formik>







    </div>
  )
}

export default Login


