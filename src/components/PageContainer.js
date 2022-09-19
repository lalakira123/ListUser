import styled from 'styled-components';

export default function PageContainer({ children }){
  return(
    <Container>{ children }</Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0px;
`

