import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import Swal from 'sweetalert2';

import PageContainer from "../components/PageContainer";
import DataContext from "../context/DataContext";

export default function Form(){
  const [form, setForm] = useState({name: '', email: '', gender: '', status: ''})

  const navigate = useNavigate();

  const { data, setData } = useContext(DataContext);

  function submitHandler(e){
    e.preventDefault();
    if(form.gender === '' || form.status === ''){
      Swal.fire({
        title: 'Error!',
        text: 'Formulário não completado!',
        icon: 'error',
        confirmButtonText: 'De novo'
      });
    } else {
      setData([...data, form]);
      Swal.fire({
        title: 'Sucess!',
        text: 'Usuário adicionado!',
        icon: 'success',
        confirmButtonText: 'Ok!'
      });
    }
  }
  
  return(
    <>
    <Page>
      <h1>Adicionar Usuário</h1>
      <p className={'back'} onClick={() => navigate('/')}> - Voltar para lista de usuários</p>
      <PageContainer>
        <Forms onSubmit={submitHandler}>
          <input 
            placeholder="Nome"
            pattern="[A-Za-z\]{4,24}"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            required
          />
          <input
            type='email'
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})} 
            required
          />
          <label for="gender">Gênero: </label>
          <select id="gender" name="gender" onClick={(e) => setForm({...form, gender: e.target.value})}>
            <option value=''></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label for="status">Status: </label>
          <select id="status" name="status" onClick={(e) => setForm({...form, status: e.target.value})}>
            <option value=''></option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button type="submit">Adicionar</button>
        </Forms>
      </PageContainer>
    </Page>
    </>
  )
};

const Page = styled.div`
  padding-left: 20px;
  h1 {
    font-size: 30px;
    font-weight: 700;
    padding-top: 20px;
  }
  .back {
    display: flex;
    color: #ffffff;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #000000;
    width: 200px;
    height: 50px;
    align-items: center;
    padding: 10px;
    margin-right: 20px;
  }
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  input{
    margin-bottom: 20px;
  }
  select{
    margin-bottom: 20px;
  }
`