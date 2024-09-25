import { useState } from 'react'

export function WholePageLmao(){

  const [personal, setPersonal] = useState({
    firstName: 'Dan',
    lastName: 'Steely',
    email: 'pegdansteely@gmail.com',
    phone: '888-447-5594'})

  function personalFirst(e){
    setPersonal({
      ...personal,
      firstName: e.target.value
    })
  }
  function personalLast(e){
    setPersonal({
      ...personal,
      lastName: e.target.value
    })
  }
  function personalEmail(e){
    setPersonal({
      ...personal,
      email: e.target.value
    })
  }
  function personalPhone(e){
    setPersonal({
      ...personal,
      phone: e.target.value
    })
  }
  const [education, setEducation] = useState({
    
  })

  return(
    <div className="page">
      <div className="inputs">
        <input 
        value={personal.firstName}
        onChange={personalFirst}
        />
        <input 
        value={personal.lastName}
        onChange={personalLast}
        />
        <input 
        value={personal.email}
        onChange={personalEmail}
        />
        <input 
        value={personal.phone}
        onChange={personalPhone}
        />
      </div>
    </div>
  );
}