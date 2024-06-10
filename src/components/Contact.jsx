import '../styles/Contact.css'

export function Contact ({eventHandler, text}) {

    const details = text.personalDetails.details[0]

    return (
        <div className='personalDetails'>
            <div id='personalDetails'>
                <form className='static-form'>
                    <h2 className='section-heading'>Personal Details</h2>
                    <Name handleChange={eventHandler} value={details.name}/>
                    <Email handleChange={eventHandler} value={details.email}/>
                    <PhoneNumber handleChange={eventHandler} value={details.number}/>
                    <Address handleChange={eventHandler} value={details.address}/>
                </form>
            </div>
        </div>
    )
}

function Name ({handleChange, value}) {
    return (
        <label className='details'>
            Full name
            <input id='name' className='0' value={value} onChange={handleChange} type='text'/>
        </label>
    )
}
function Email ({handleChange, value}) {
    return (
        <label className='details'>
            Email address
            <input id='email' className='0' value={value} onChange={handleChange} type='email'/>
        </label>
    )
}

function PhoneNumber ({handleChange, value}) {
    return (
        <label className='details'>
            Phone number
            <input id='number' className='0' value={value} onChange={handleChange} type='tel'/>
        </label>
    )
}

function Address ({handleChange, value}) {
    return (
        <label className='details'>
            Address
            <input id='address' className='0' value={value} onChange={handleChange} type='text'/>
        </label>
    )
} 