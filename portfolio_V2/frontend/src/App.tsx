type studentProps = {
  student: string,
  degree: string,
  points: number
}

type expertieceProps = {
  experienceOne: string,
  experienceTwo: string
}

type contactProps= {
  email: string
}

export function Expertiece({experienceOne = "experience", experienceTwo = "experienceTwo"}: expertieceProps){
  return(
    <>
      <p>{experienceOne}</p>
      <p>{experienceTwo}</p>
    </>
  )
}

  export function Header({student = "Skriv navn", degree = "Studie", points = 0}: studentProps) {
    return(
      <header>
        <h1>{student}</h1>
        <p>{degree}</p>
        <p>{points}</p>
      </header>
    )
  }

  export function Contact({email = "email@domene.com"}) {
    return(
      <>
      <p>{email}</p>
      </>
    )
  }
    
function App() {
  // const student = 'Halgeir Geirson'
  // const degree = 'Bachelor IT'
  // const points = 180
  // const experienceOne = 'Figma UI for customer X'
  // const experienceTwo = 'Website for customer Y'
  // const email = 'student@hiof.no'


  return (
    <>
    <Header student="Halgeir Geirson" degree="Bachelor IT" points={500} />
    <Expertiece experienceOne='Figma UI for customer X' experienceTwo="Website for customer Y" />
    <Contact email="student@hiof.no"/>
    </>
  )
}

export default App