import '../styles/Skillset.css'

export function Skillset({ eventHandler, text }) {

    const skillset = text.skillset.skill[0]

    return (

        <div className='skillset'>
            <div id='skillset'>
                <form className="static-form">
                    <h2 className='section-heading'>Skills</h2>
                    <Heading handleChange={eventHandler} value={skillset.heading} />
                    <Skills handleChange={eventHandler} value={skillset.skills} />
                </form>
            </div>
        </div>
    )
}

function Heading({ handleChange, value }) {
    return (
        <label className='skill'>
            Custom heading
            <input className={0} id='heading' value={value} onChange={handleChange} type='text' />
        </label>
    )
}

function Skills({ handleChange, value }) {
    return (
        <label className='skill'>
            Skills <span className='little-text'>comma-seperated list</span>
            <input className={0} id='skills' value={value} onChange={handleChange} type='text' />
        </label>
    )
}