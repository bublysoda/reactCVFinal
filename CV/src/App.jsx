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
    schoolName: 'Donda Academy',
    yearsAttend: '2016-2020',
    degree: 'Singing and Cultural Studies'
  })

  function educationSchool(e){
    setEducation({
      ...education,
      schoolName: e.target.value
    })
  }
  function educationYears(e){
    setEducation({
      ...education,
      yearsAttend: e.target.value
    })
  }
  function educationDegree(e){
    setEducation({
      ...education,
      degree: e.target.value
    })
  }

  const [work, setWork] = useState({
    companyName: 'Hotel California',
    position: 'Nightman',
    timeWorked: '20 Years'
  })

  function workComp(e){
    setWork({
      ...work,
      companyName: e.target.value
    })
  }
  function workPos(e){
    setWork({
      ...work,
      position: e.target.value
    })
  }
  function workTime(e){
    setWork({
      ...work,
      timeWorked: e.target.value
    })
  }

  const [PersonalFinal, setPersonalFinal] = useState({
    finalFName: personal.firstName,
    finalLName: personal.lastName,
    finalEMail: personal.email,
    finalPhone: personal.phone
  })

  function personalPusher(){
    setPersonalFinal({
      finalFName: personal.firstName,
      finalLName: personal.lastName,
      finalEMail: personal.email,
      finalPhone: personal.phone
    })
  }


  const [EducationFinal, setEducationFinal] = useState({
    finalSchoolName: education.schoolName,
    finalYearsAttend: education.yearsAttend,
    finalDegree: education.degree
  })

  function educationalPusher(){
    setEducationFinal({
      finalSchoolName: education.schoolName,
      finalYearsAttend: education.yearsAttend,
      finalDegree: education.degree
    })
  }


  const [WorkFinal, setWorkFinal] = useState({
    finalCompanyName: work.companyName,
    finalWorkPos: work.position,
    finaltimeWorked: work.timeWorked
  })
  
  function workPusher(){
    setWorkFinal({
      finalCompanyName: work.companyName,
      finalWorkPos: work.position,
      finaltimeWorked: work.timeWorked,
    })
  }


  return(
    <div className="page">
      <div className="top">
        First Name:
        <input
        id='firstName' 
        value={personal.firstName}
        onChange={personalFirst}
        />
        Last Name:
        <input
        id='lastName' 
        value={personal.lastName}
        onChange={personalLast}
        />
        Email:
        <input
        id='email'
        value={personal.email}
        onChange={personalEmail}
        />
        Phone:
        <input
        id='phone' 
        value={personal.phone}
        onChange={personalPhone}
        />
        <button id="submitPersonal" onClick={personalPusher}>Submit</button>
      </div>

      <br></br>

      <div className="education">
        School Name:
        <input
        id='schoolName'
        value={education.schoolName}
        onChange={educationSchool}
        />
        Years Attended:
        <input
        id='yearsAttend'
        value={education.yearsAttend}
        onChange={educationYears}
        />
        Degree:
        <input
        id='degree'
        value={education.degree}
        onChange={educationDegree}
        />
        <button id="submitEducation" onClick={educationalPusher}>Submit</button>
      </div>

      <br></br>

      <div className="work">
        Former Company Name:
        <input
        id='companyName'
        value={work.companyName}
        onChange={workComp}
        />
        Former Company Position:
        <input
        id='position'
        value={work.position}
        onChange={workPos}
        />
        Time Employed:
        <input
        id='timeWorked'
        value={work.timeWorked}
        onChange={workTime}
        />
        <button id="submitWork" onClick={workPusher}>Submit</button>
      </div>

      <br></br>

      <div className="actualCV">
      <div className="personal">
          <div className="namePage">{PersonalFinal.finalFName} {PersonalFinal.finalLName}</div>
          <div className="phonePage">{PersonalFinal.finalEMail}</div>
          <div className="emailPage">{PersonalFinal.finalPhone}</div>
        </div>
        <div className="education">
          <div className="institutionPage">{EducationFinal.finalSchoolName}</div>
          <div className="gradPage">{EducationFinal.finalYearsAttend}</div>
          <div className="degreePage">{EducationFinal.finalDegree}</div>
        </div>
        <div className="work">
          <div className="jobPage">{WorkFinal.finalCompanyName}</div>
          <div className="positionPage">{WorkFinal.finalWorkPos}</div>
          <div className="yearsPage">{WorkFinal.finaltimeWorked}</div>
        </div>
      </div>
    </div>
  );
}
