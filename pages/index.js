import styled from "styled-components";

export default function Home() {
  async function fetch1() {
    const response = await fetch("/api/users/1234");
    const data = await response.text();
    console.log(data);
  }

  async function fetch2() {
    const exampleData = {
      password: "password12345",
    };

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exampleData),
    });
    const message = await response.json();
    console.log(message);
  }

  async function fetch4() {
    const response = await fetch("api/locations/1337/delete", {
      method: "DELETE",
    });
    const message = await response.text();
    console.log(message);
  }

  return (
    <Container>
      <button onClick={fetch1}>Fetch Data with GET</button>
      <button onClick={fetch2}>Fetch Data with POST</button>
      <button>Fetch Data with UPDATE</button>
      <button onClick={fetch4}>Fetch Data with DELETE</button>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;

  button {
    height: 100px;
  }
`;
