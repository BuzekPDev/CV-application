import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Preview } from './components/Preview'
import { Info } from './components/exampleInfo'
import { Template } from './components/exampleInfo'
import print from './assets/print.svg'
import logo from './assets/CVMaker.svg'

export function App () {

  const [info, setInfo] = useState(Info)
  const [tempInfo, setTempInfo] = useState(Info)
  const [selected, setSelected] = useState({workExperience: null, education: null})
  
  function selectHandler (e) {
      setTempInfo(info)

      if (e.target.className === 'close') {
        setSelected({workExperience: null, education:null})
        setInfo(tempInfo)
        return 
      }
      if (e.target.className === 'save') {
        setSelected({workExperience: null, education:null})
        return
      }

      const category = e.target.parentElement.id
      const newSelected = {workExperience: null, education:null}
      newSelected[category] = e.target.className[0]

      setSelected(newSelected)

      const form = e.target.parentElement
      form.classList.replace(form.className[0], e.target.className[0])
  }

  function handleChange (ev) {
    if (ev.target.id === 'clear') {
      setInfo(Template)
      return
    }
    if (ev.target.id === 'example') {
      setInfo(Info)
      return
    }

    const {id, value} = ev.target
    const subclass = ev.target.parentElement.className
    const category = ev.target.parentElement.parentElement.parentElement.id
    const index = ev.target.className

    const newObject = structuredClone(info)
    newObject[category][subclass][index][id] = value
      
    setInfo(newObject)
  }

  function addHandler (ev) {
    ev.preventDefault()

    const subclass = ev.target.className.split(' ')[0]
    const category = ev.target.parentElement.id
    
    const newObj = structuredClone(info)
    const objArray = newObj[category][subclass]

    const newSelected = {workExperience: null, education: null}
    newSelected[category] = objArray.length

    if (category === 'workExperience') {
      objArray[objArray.length] = {
        companyName:"",
        position: "",
        workStart: "",
        workEnd: "",
        workLocation: "",
        description: "",
      }
    } else if (category === 'education') {
      objArray[objArray.length] = {
        schoolName: "",
        degree: "",
        schoolStart: "", 
        schoolEnd: "", 
        schoolLocation: ""
      }
    }

    setTempInfo(info)
    setInfo(newObj)
    setSelected(newSelected)

  }

  function deleteHandler (ev) {
      ev.preventDefault()

      const subclass = ev.target.className.split(' ')[0]
      const category = ev.target.parentElement.className.split('-')[0]
      const index = selected[category]

      if (index === null) return

      const newObj = structuredClone(info)
      const newSelected = structuredClone(selected)

      newObj[category][subclass].splice(index,1)
      newSelected[category] = null
     
      setInfo(newObj)
      setSelected(newSelected)
  }

  return(
  <>
    <header>
      {/* replace when deploying */}
      <a href='http://localhost:5173/'><img alt='CV Maker logo' className='site-logo' src={logo}/></a>
      <button className='print' onClick={window.print} type='button'> Print
        <img className='print-svg' src={print} />
      </button>
    </header>
    <div className='content'>
      <Sidebar addHandler={addHandler} deleteHandler={deleteHandler} selectHandler={selectHandler} eventHandler={handleChange} info={info} selected={selected}/>
      <main>
          <Preview info={info}/>
      </main>
    </div>
  </>
  )
}
