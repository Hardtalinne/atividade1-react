import { useState } from "react";
import { Button, Container, Form, H3, Input, Label } from "./style";

export default function PagesCalculadora() {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [resultado, setResultado] = useState();

  const soma = () => {
    const soma = Number(valueA) + Number(valueB);
    setResultado(soma);
    console.log(`soma`, soma);
  };

  const handleInputA = (event) => {
    setValueA(event.target.value);
  };

  const handleInputb = (event) => {
    setValueB(event.target.value);
  };

  return (
    <Container>
      <H3> Somar dois Numeros </H3>
      <Form>
        <Label htmlFor="numeroA">Numero A</Label>
        <Input name="numeroA" value={valueA} onChange={handleInputA} />
        <Label htmlFor="numeroB">Numero B</Label>
        <Input name="numeroB" value={valueB} onChange={handleInputb} />
      </Form>
      <Button onClick={soma}>Calcular</Button>
      <H3> Resultado: {resultado}</H3>
    </Container>
  );
}
