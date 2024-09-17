import Header from "./components/Header";

import Contact from "./components/Contact";
import Projecs from "./components/Projects";
import Experiences from "./components/Experiences";

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
      <Experiences />
      <Contact email="student@hiof.no" />
      <Projecs />
    </>
  );
}

export default App;
