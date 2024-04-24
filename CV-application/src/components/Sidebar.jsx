import '../styles/Sidebar.css'
import { Contact } from './Contact'
import { Education } from './Education'
import { Skillset } from './Skillset'
import { WorkExperience } from './Work'
import { Options } from './TemplateOptions'

export function Sidebar({ 
    addHandler,
    deleteHandler,
    selectHandler,
    eventHandler,
    info,
    selected }) {

    function expand(e) {
        let category = e.target.parentElement.className
        category = category.split(' ')
        const form = document.getElementById(category[0])
        const id = form.className[0]
        form.className = form.className === id + " visible" ? id + " hidden" : id + ' visible'
        e.target.className = e.target.className === 'expand' ? 'expanded' : 'expand'
    }

    return (
        <aside>
            <Options handleChange={eventHandler} />
            <Contact eventHandler={eventHandler} text={info} />
            <Skillset eventHandler={eventHandler} text={info} />
            <WorkExperience addHandler={addHandler}
                deleteHandler={deleteHandler}
                eventHandler={eventHandler}
                text={info}
                selected={selected.workExperience}
                selectHandler={selectHandler}
                expand={expand} />
            <Education addHandler={addHandler}
                deleteHandler={deleteHandler}
                eventHandler={eventHandler}
                text={info}
                selected={selected.education}
                selectHandler={selectHandler}
                expand={expand} />

        </aside>
    )
}

