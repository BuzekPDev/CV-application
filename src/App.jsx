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
  const [theme, setTheme] = useState('light')

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

  function changeTheme (ev) {
    const body = document.querySelector('body')
    body.className = body.className === 'light' ? 'dark' : 'light' 

    const child = ev.target.firstChild
    child.id = child.id === 'light' ? 'dark' : 'light'

    ev.target.className = child.id === 'dark' ? 'theme-toggle dark-mode' : 'theme-toggle light-mode'
    setTheme(child.id)
  }

  return(
  <>
    <header>
      <a href=''><img alt='CV Maker logo' className='site-logo' src={logo}/></a>
      <button className='print' onClick={window.print} type='button'> Print
        <img className='print-svg' src={print} />
      </button>
      <button type='button' className='theme-toggle light-mode' onClick={changeTheme}>
        <div className='thumb-thing' id='light'>
          <svg className='theme-icon light' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#a)" fill="#000000"> <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path> </g> <defs> <clipPath id="a"> <path fill="#ffffff" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>
          <svg className='theme-icon dark' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" fill="#e5e5e5"></path> </g></svg>          
        </div>
      </button>
    </header>
    <div className='content'>
      <Sidebar addHandler={addHandler} deleteHandler={deleteHandler} selectHandler={selectHandler} eventHandler={handleChange} info={info} selected={selected} theme={theme}/>
      <main>
          <Preview info={info}/>
      </main>
    </div>
  </>
  )
}
