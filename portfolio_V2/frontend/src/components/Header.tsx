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
    <header>
      <h1>{student}</h1>
      <p>{degree}</p>
      <p>{points}</p>
    </header>
  );
}