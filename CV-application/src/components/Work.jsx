import '../styles/Work.css'
import workIcon from '../assets/work.svg'

export function WorkExperience({ 
    addHandler,
    deleteHandler,
    eventHandler,
    text,
    selected,
    selectHandler,
    expand }) {


    const work = text.workExperience.company[selected]

    return (
        <div className='workExperience info'>
            <button className='expand' type='button' onClick={expand}><img className='sidebar-icon' src={workIcon} />Employment History<div className='img'></div></button>

            <div id='workExperience' className='1 hidden'>

                {
                    work ? <></> :
                        text.workExperience.company.map((self, id) => (
                            <button key={'workDropdownBtn' + id} type='button' className={id + ' select-button'} onClick={selectHandler}>{self.companyName.length ? self.companyName : `Work ${id + 1}`}</button>
                        ))
                }
                {
                    work ? (
                        <form>
                            <CompanyName handleChange={eventHandler} value={work.companyName} selected={selected} />
                            <Position handleChange={eventHandler} value={work.position} selected={selected} />
                            <StartDate handleChange={eventHandler} value={work.workStart} selected={selected} />
                            <EndDate handleChange={eventHandler} value={work.workEnd} selected={selected} />
                            <Location handleChange={eventHandler} value={work.workLocation} selected={selected} />
                            <Description handleChange={eventHandler} value={work.description} selected={selected} />
                            <div className='workExperience-buttons buttons'>
                                <button className='company delete' type='button' onClick={deleteHandler}>Delete</button>
                                <button className='save' type='button' onClick={selectHandler}>Save</button>
                                <button className='close' type='button' onClick={selectHandler}>Close</button>
                                <div className='float-control'></div>
                            </div>
                        </form>) : <button onClick={addHandler} className='company add'>+ Education</button>
                }


            </div>
        </div>
    )
}


function CompanyName({ handleChange, value, selected }) {
    return (
        <label className='company'>
            Company Name
            <input className={selected} id='companyName' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Position({ handleChange, value, selected }) {
    return (
        <label className='company'>
            Position Title
            <input className={selected} id='position' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function StartDate({ handleChange, value, selected }) {
    return (
        <label className='company'>
            Start date
            <input className={selected} id='workStart' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function EndDate({ handleChange, value, selected }) {
    return (
        <label className='company'>
            End date
            <input className={selected} id='workEnd' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Location({ handleChange, value, selected }) {
    return (
        <label className='company'>
            Location
            <input className={selected} id='workLocation' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Description({ handleChange, value, selected }) {
    return (
        <label className='company'>
            Job description
            <textarea className={selected} id='description' value={value} onChange={handleChange} type='text' />
        </label>
    )
}
