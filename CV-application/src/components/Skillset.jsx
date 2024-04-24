import '../styles/Skillset.css'

export function Skillset ({eventHandler, text}) {

    const skillset = text.skillset.skill[0]

    return (
        // <div className='skillset info'>
        //     <button className='expand' type='button' onClick={expand}>Skills<div className='img'></div></button>

        //     <div id='skillset' className='0 hidden'>
        //         {
        //             skillset ? <></> : 
        //                 text.skillset.skill.map((self, id) => (
        //                     <button type='button' className={id + ' select-button'} onClick={selectHandler}>{self.heading}</button>
        //                 ))
        //         }
        //         {
        //             skillset ? (
        //             <form>
        //                 <Heading handleChange={eventHandler} value={skillset.heading} selected={selected}/>
        //                 <Skills handleChange={eventHandler} value={skillset.skills} selected={selected}/>
        //             </form>
        //             ) : <button className='add'>+ Education</button>
        //         }
        //     </div>
        // </div>
        
        <div className='skillset'>
            <div id='skillset'>
                <form className="static-form">
                    <h2 className='section-heading'>Skills</h2>
                    <Heading handleChange={eventHandler} value={skillset.heading}/>
                    <Skills handleChange={eventHandler} value={skillset.skills}/>
                </form>
            </div>
        </div>
    )
}

function Heading ({handleChange, value}) {
    return (
        <label className='skill'>
            Custom heading
            <input className={0} id='heading' value={value} onChange={handleChange} type='text'/>
        </label>
    )
}

function Skills ({handleChange, value}) {
    return (
        <label className='skill'>
            Skills
            <input className={0} id='skills' value={value} onChange={handleChange} type='text'/>
        </label>
    )
}