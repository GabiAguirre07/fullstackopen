const Header = (props) => {
  return (
    <div>
      <h1>{props.curso.nombre}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parte} {props.ejercicios}
      </p>
    </div>
  );
};

const Content = (props) => {
  const [primera, segunda, tercera] = props.partes;
  return (
    <div>
      <Part parte={primera.nombre} ejercicios={primera.ejercicios} />
      <Part parte={segunda.nombre} ejercicios={segunda.ejercicios} />
      <Part parte={tercera.nombre} ejercicios={tercera.ejercicios} />
    </div>
  );
};

const Total = (props) => {
  const [
    { ejercicios: ejercicios1 },
    { ejercicios: ejercicios2 },
    { ejercicios: ejercicios3 },
  ] = props.partes;
  const total = ejercicios1 + ejercicios2 + ejercicios3;
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const curso = {
    nombre: "Half Stack application development",
    partes: [
      { nombre: "Fundamentals of React", ejercicios: 10 },
      {
        nombre: "Using props to pass data",
        ejercicios: 7,
      },
      { nombre: "State of a component", ejercicios: 14 },
    ],
  };

  return (
    <div>
      <Header curso={curso}></Header>
      <Content partes={curso.partes}></Content>
      <Total partes={curso.partes}></Total>
    </div>
  );
};

export default App;
