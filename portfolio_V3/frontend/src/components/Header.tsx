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
        <Logo/>
      <Nav/>
        <h1>{student}</h1>
        <p>{degree}</p>
        <p>{points}</p>
      </header>
      
    </>
  );
}