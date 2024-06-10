import '../styles/Education.css'
import schoolIconlight from '../assets/school-lightmode.svg'
import schoolIcondark from '../assets/school-darkmode.svg'

export function Education({ 
    addHandler,
    deleteHandler,
    eventHandler,
    text,
    selected,
    selectHandler,
    expand,
    theme }) {

    const edu = text.education.school[selected]

    return (
        <div className='education info'>
            <button className='expand' type='button' onClick={expand}><img className='sidebar-icon' src={theme === 'light' ? schoolIconlight : schoolIcondark} />Education<div className='img'></div></button>

            <div id='education' className='0 hidden'>
                {
                    edu ? <></> :
                        text.education.school.map((self, id) => (
                            <button key={'schoolDropdownBtn' + id} type='button' className={id + ' select-button'} onClick={selectHandler}>{self.schoolName.length ? self.schoolName : `School ${id + 1}`}</button>
                        ))
                }
                {
                    edu ? (
                        <form>
                            <School handleChange={eventHandler} value={edu.schoolName} selected={selected} />
                            <Degree handleChange={eventHandler} value={edu.degree} selected={selected} />
                            <StartDate handleChange={eventHandler} value={edu.schoolStart} selected={selected} />
                            <EndDate handleChange={eventHandler} value={edu.schoolEnd} selected={selected} />
                            <Location handleChange={eventHandler} value={edu.schoolLocation} selected={selected} />
                            <div className='education-buttons buttons'>
                                <button className='school delete' type='button' onClick={deleteHandler}>Delete</button>
                                <button className='save' type='button' onClick={selectHandler}>Save</button>
                                <button className='close' type='button' onClick={selectHandler}>Close</button>
                                <div className='float-control'></div>
                            </div>
                        </form>
                    ) : <button className='school add' onClick={addHandler}>+ Education</button>
                }
            </div>
        </div>
    )
}

function School({ handleChange, value, selected }) {
    return (
        <label className='school'>
            School name
            <input className={selected} id='schoolName' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Degree({ handleChange, value, selected }) {
    return (
        <label className='school'>
            Degree
            <input className={selected} id='degree' value={value} onChange={handleChange} type="text" />
        </label>
    )
}

function StartDate({ handleChange, value, selected }) {
    return (
        <label className='school'>
            Start date
            <input className={selected} id='schoolStart' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function EndDate({ handleChange, value, selected }) {
    return (
        <label className='school'>
            End date
            <input className={selected} id='schoolEnd' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Location({ handleChange, value, selected }) {
    return (
        <label className='school'>
            Location
            <input className={selected} id='schoolLocation' value={value} onChange={handleChange} type='text' />
        </label>
    )
}
