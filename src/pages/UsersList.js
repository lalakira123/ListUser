import { useEffect, useState } from "react";
import axios from 'axios';

import PageContainer from "../components/PageContainer";
import BoxUser from "../components/BoxUser";
import styled from "styled-components";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [emptyFilter, setEmptyFilter] = useState(0);

  useEffect(() => {
    const promise = axios.get('https://gorest.co.in/public/v2/users');
    promise.then((response) => {
      const { data } = response;
      setUsers(data);
    });
    promise.catch((e) => {
      console.log(e);
    });
  }, [emptyFilter]);

  function filterStatusHandler(status){
    const filterArray = [];
    if(users.length > 0){
      for(let i = 0; i < users.length; i++){
        if( status === users[i].status ){
          filterArray.push(users[i]);
        }
      }
      setUsers(filterArray);
    }
  }

  return(
    <Page>
      <h1>Listagem de Usuários</h1>
      <div className="filters">  
        <h2>FILTROS: </h2>
        <p onClick={() => filterStatusHandler('active')}>Active</p>
        <p onClick={() => filterStatusHandler('inactive')}>Inactive</p>
        <p onClick={() => setEmptyFilter(emptyFilter + 1)}>Limpar Filtro</p>
      </div>
      <PageContainer>
        {
          users.map((item) => {
            const { name, email, gender, status } = item;
            return(
              <BoxUser 
                name={name}
                email={email}
                gender={gender}
                status={status}
              />
            );
          })
        }
      </PageContainer>
    </Page>
  )
};

const Page = styled.div`
  padding-left: 20px;
  h1 {
    font-size: 30px;
    font-weight: 700;
    padding-top: 20px;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin-top: 20px;
    p {
      font-weight: 500;
      background-color: #ffffff;
      border-radius: 20px;
      padding: 10px;
    }
  }
`



