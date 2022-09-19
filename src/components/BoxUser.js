import styled from 'styled-components';

export default function BoxUser({ name, email, gender, status }){
  return(
    <Box>
      <p><span>Nome:</span> {name}</p>
      <p><span>Email:</span> {email}</p>
      <p><span>Gênero:</span> {gender}</p>
      <p><span>Status:</span> {status}</p>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 20px;
  border: 2px solid #000000;
  span {
    font-weight: 700;
  }
`
