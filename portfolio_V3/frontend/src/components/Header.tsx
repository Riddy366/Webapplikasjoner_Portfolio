import Logo from "./Logo";
import Nav from "./Nav";


type studentProps = {
  student: string;
  degree: string;
  points: number;
};

export default function Header({
  student = "Skriv navn",
  degree = "Studie",
  points = 0,
}: studentProps) {
  return (
    <>
      <h2>Student info</h2>
      <header>
        {/*Tar imot logo og nav komponentet*/}
        <Logo/>  
      <Nav/>
      {/* Standard stil for header */}
        <h1>{student}</h1>
        <p>{degree}</p>
        <p>{points}</p>
      </header>
      
    </>
  );
}
