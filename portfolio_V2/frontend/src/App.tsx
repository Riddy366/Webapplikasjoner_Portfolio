import Header from "./components/Header"
import Expertiece from "./components/Expertiece"
import Contact from "./components/Contact"
import Projecs from "./components/Projects"

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
    <Projecs />
    </>
  )
}

export default App