import '../styles/Preview.css'
import emailIcon from '../assets/email.svg'
import phoneIcon from '../assets/phone.svg'
import addressIcon from '../assets/location.svg'

export function Preview ({info}) {
    // return (
    //     <div className='preview'>
    //     {info.workExperience.company.map(place => (
    //             <h1>{place.name}</h1>
    //     ))}
    //     </div>
    // )
    // IT WORKS

 
    
    const personalDetails = info.personalDetails.details[0]
    const workExperience = info.workExperience.company
    const education = info.education.school
    const skillset = info.skillset.skill[0]

    return (
        <div className='preview'>
            <header className='preview-header'>
                <h1 className='name'>{info.personalDetails.details[0].name}</h1>
                <p className='header-text'>
                    {
                        personalDetails.email.length ?
                        <span className='inside-text'>
                            <img className='icon' src={emailIcon}/>
                            {personalDetails.email}
                        </span> : <></>
                    }
                    {
                        personalDetails.number.length ? 
                        <span className='inside-text'>
                            <img className='icon' src={phoneIcon}/>
                            {personalDetails.number}
                        </span>  : <></>  
                    }
                    {
                        personalDetails.address.length ?
                        <span className='inside-text'>
                            <img className='icon' src={addressIcon}/>
                            {personalDetails.address}
                        </span> : <></>
                    }
                </p>
            </header>
            <div className='CV-main'>
                <h3 className='preview-heading'>Employment History</h3>
                          
                { 
                    workExperience.map(self => (
                        <div className='text-block'>
                            <p className='text-block-left'>
                                {self.workStart} 
                                    {self.workStart.length ? " - " : ""} 
                                {self.workEnd}
                                <br/>
                                {self.workLocation}
                            </p>
                            <p>
                                <span className='bold'>
                                    {self.companyName}
                                </span>
                                <br/>
                                {self.position}
                                <br/>
                                <p className='text-description'>
                                    {self.description}
                                </p>
                            </p>   
                        </div>
                    ))
                }
                <h3 className='preview-heading'>Education</h3>
                { 
                    education.map(self => (
                        <div className='text-block'>
                            <p className='text-block-left'>
                                {self.schoolStart} 
                                    {self.schoolStart.length ? " - " : ""} 
                                {self.schoolEnd}
                                <br/>
                                {self.schoolLocation}
                            </p>
                            <p>
                                <span className='bold'>
                                    {self.schoolName}
                                </span>
                                <br/>
                                {self.degree}
                            </p>   
                        </div>
                    ))
                }
                {
                    skillset.heading.length ? 
                    <h3 className='preview-heading'>{skillset.heading}</h3> : <></>
                }                
                { 
                    skillset.skills.split(',').map(self => (
                            self.length ? 
                            <div className='skill-list'>{self}</div> : <></>
                    )) 
                }
            </div>
        </div>
    )
    
}