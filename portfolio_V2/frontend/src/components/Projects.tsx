type projectProps = {
  title: string;
  description: string;
  createdAt: string;
};

export default function Projecs() {
  return (
    <>
      <h1>PROSJEKTER</h1>
      <section>
        <h2>Tittel1</h2>
        <p>Beskrivelse1</p>
        <p>createdAt dato idag</p>
      </section>
      <section>
        <h2>Tittel2</h2>
        <p>Beskrivelse2</p>
        <p>createdAt dato idag</p>
      </section>
      <section>
        <h2>Tittel3</h2>
        <p>Beskrivelse3</p>
        <p>createdAt dato idag</p>
      </section>
      <section>
        <h2>Tittel4</h2>
        <p>Beskrivelse4</p>
        <p>createdAt dato idag</p>
      </section>
    </>
  );
}
