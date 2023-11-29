import React, { useEffect, useRef, useState } from 'react'
import ques from '../assets/ques.json'
import ans from '../assets/answer.json'
import axios from 'axios'
import useLink from '../hooks/useLink'

axios.defaults.headers.common['Content-Type'] = "multipart/form-data"
// axios.defaults.headers.common['Accept'] = "application/json"


const QuesList = () => {

  const {baseURL,api} = useLink()

  const [count,setCount] = useState(0)
  const [questions,setQuestions] = useState(ques)
  const [answers,setAnswers] = useState(ans)
  const [answer,setAnswer] = useState({})
  const [result,setResult] = useState({})
  const [selectedOpt,setSelectedOpt] = useState("")
  const [options,setOptions] = useState(true)
  const [loading, setLoading] = useState(false)

  const formData = new FormData()
  formData.append('data', answer)

  // useEffect(()=>{
  //   if(selectedOpt == ""){
  //     setCount(count)
  //   }
  //   setQuestions(ques)
  // })

  useEffect(()=>{
    if(Object.keys(result).length == 0){
      setLoading(false)
    }
  })

  useEffect(()=>{
    if(count > 9){
      setOptions(false)
    }else{
      setOptions(true)
    }
  },[count])

  const changeCount = () =>{
    if(selectedOpt !== ""){
      setCount((count+1))
      setAnswer(answer + ` ${selectedOpt}`)
      setSelectedOpt("")
    }
  }
  
  const handleSubmit = async() =>{
    setLoading(true)
    const res =  await axios.post(`${baseURL}/${api}/`,formData)
    const data =  await res.data
    setResult(answers.find(ele => ele.name == data.result))
  }

  const handleBack = () =>{
    setCount(0)
    setAnswer('')
    setResult({})
    setSelectedOpt("")
  }

  // console.log(answer)
  return (
    <div className='flex items-center justify-center h-[80vh] overflow-hidden'>
      {count <= 11 ? <div className="bg-[#90e0ef] p-8 rounded-lg max-w-[80vw]">
        <h4 className='text-xl mb-2 font-semibold'>Question {count+1}/12</h4>
        <h3 className='font-bold text-3xl mb-4'>{questions[count].ques}</h3>
        {options ?
          (
            <>
            {questions[count]?.options.map((option,index)=>(
              <div key={index} className='py-1 px-3 mb-3 rounded-lg flex items-center justify-between border border-gray-700 cursor-pointer' onClick={(e)=>{setSelectedOpt(e.target.value)}}>
                <label className='text-lg font-semibold cursor-pointer w-full' htmlFor={option}>{option}</label>
                <input className='h-4 w-4 m-2 cursor-pointer accent-slate-700'   checked={selectedOpt === option} type="radio" id={option} name="opt" value={option} />
              </div>
            ))}
            </>
          )
        :
            <>
            <p className='mb-4 text-lg font-semibold'>(maximum 200 words)</p>
              <textarea className='w-[100%] h-40 rounded-lg p-4 text-lg outline-none ' onChange={(e) => setSelectedOpt(e.target.value)} value={selectedOpt}/>
            </>
        }
        <div className="mt-4 flex justify-end">  
            <button className='bg-[#0096c7] text-white px-5 py-1 rounded-lg text-lg' onClick={changeCount}>Next</button>
        </div>
          <p className='mt-5 text-lg font-semibold'>Note: Don't try to go back to previous question else it won't be able to predict properly</p>
      </div>
      :
      Object.keys(result).length == 0 ?
      <div className='text-center'>
        <h2 className='mb-2 text-2xl font-semibold'>Please submit your response</h2>
        <button className='bg-[#0096c7] text-white px-5 py-1 rounded-lg text-lg' onClick={handleSubmit}>Submit</button>
      </div>
      :
      (loading) ?
      <div className='max-w-[80vw] text-center'>
          <h2>Result is fetching</h2>
          <p>Please wait</p>
      </div>
      :
      <div className='max-w-[80vw] text-center'>
        <h1 className='text-3xl font-bold mb-2'>Your Personality Prediction</h1>
        <h2 className='text-2xl font-semibold'>{result.name}</h2>
        <p className='text-lg font-semibold mb-2'>{result.fullForm}</p>
        <p className='text-lg font-semibold max-w-2xl'>{result.desc}</p>
        <button onClick={handleBack} className='bg-[#0096c7] text-white px-5 py-1 mt-4 rounded-lg text-lg'>Back</button>
      </div>
      }
    </div>
  )
}

export default QuesList