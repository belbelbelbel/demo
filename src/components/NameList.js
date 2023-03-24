import React from 'react'
import Person from './Person'
function NameList() {
    const person = [
        { id:1 ,firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
        { id:2 ,firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
        { id:3 ,firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    ]
    const personlist = person.map(person => <Person key={person.id} person={person} /> )
    return(
        <div>
            {personlist}
        </div>
    )
}

export default NameList
