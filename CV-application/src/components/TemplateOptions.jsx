import '../styles/TemplateOptions.css'

export function Options({ handleChange }) {

    return (
        <div className='template'>
            <Clear handleChange={handleChange} />
            <Template handleChange={handleChange} />
            <div className='float-control'></div>
        </div>
    )
}

function Clear({ handleChange }) {
    return (
        <button id='clear' className='template-button' type='button' onClick={handleChange}>
            Clear Info
        </button>
    )
}
function Template({ handleChange }) {
    return (
        <button id='example' className='template-button' type='button' onClick={handleChange}>
            Use example
        </button>
    )
}