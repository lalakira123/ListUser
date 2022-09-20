import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";

import PageContainer from "../components/PageContainer";
import BoxUser from "../components/BoxUser";
import DataContext from './../context/DataContext';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');

  const navigate = useNavigate();

  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    if(data.length === 0){
      const promise = axios.get('https://gorest.co.in/public/v2/users');
      promise.then((response) => {
        setUsers(response.data);
        setData(response.data);
        ;
      });
      promise.catch((e) => {
        console.log(e);
      });
    } else {
      setUsers(data);
    }
  }, []);

  function filterStatusHandler(status){
    const filterArray = [];
    if(data.length > 0){
      for(let i = 0; i < data.length; i++){
        if( status === data[i].status ){
          filterArray.push(data[i]);
        }
      }
      setUsers(filterArray);
    }
  }
  
  function findNameHandler(state){
    const searchedArray = [];
    if(data.length > 0 && state !== ''){
      for(let i = 0; i < data.length; i++){
        if( state === data[i].name ){
          searchedArray.push(data[i]);
          break;
        }
      }
      setUsers(searchedArray);
    } 
  }

  return(
    <Page>
      <h1>Listagem de Usuários</h1>
      <div className="filters">  
        <h2>FILTROS: </h2>
        <p onClick={() => filterStatusHandler('active')}>Active</p>
        <p onClick={() => filterStatusHandler('inactive')}>Inactive</p>
        <p onClick={() => setUsers(data)}>Limpar Filtro</p>
      </div>
      <div className="filters">
        <h2>BUSCA: </h2>
        <input 
          placeholder="Pesquisar nome"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <p onClick={() => findNameHandler(searchName)}>Buscar</p>
      </div>
      <div className="filters">
        <h2 className="plus" onClick={() => navigate('/form')}> + NOVO USUÁRIO</h2>
      </div>
      <PageContainer>
        {
          users.length > 0 ?
            users.map((item) => {
              const { id, name, email, gender, status } = item;
              return(
                <BoxUser 
                  key={id}
                  name={name}
                  email={email}
                  gender={gender}
                  status={status}
                />
              );
            })
            :
            <p>Não encontrado. Limpe o filtro.</p>
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
    width: 370px;
    margin-top: 20px;
    p {
      font-weight: 500;
      background-color: #ffffff;
      border-radius: 20px;
      padding: 10px;
    }
    input {
      width: 200px;
      height: 30px;
      border-radius: 20px;
      border: none;
      padding: 10px;
    }
    .plus {
      color: #ffffff;
      border-radius: 20px;
      background-color: #000000;
      padding: 10px;
    }
  }
`



