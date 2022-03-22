import React, { useEffect, useState } from 'react';

import axiosInstance from '../../resources/axios';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import ToDoCard from '../../components/ToDoCard';

import HomeContainer from './styles/HomeContainer';
import Header from './styles/Header';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import InputContainer from './styles/InputContainer';
import ErrorMessage from './styles/ErrorMessage';

function Home() {
  const [todosList, setTodosList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  const fetchToDos = async () => {
    try {
      const todos = await axiosInstance.get('/items/');
      setTodosList(todos.data);
      setError(false);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  return (
    <HomeContainer>
      <Header>MWD - To Do</Header>
      <InputContainer>
        <Input type="text" value={search} onChange={e => setSearch(e.target.value)} aria-label="Search" />
        <SearchIcon aria-label="Magnifying glass icon" />
      </InputContainer>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage role="alert">
          An error occurred when fetching data. Please try again later.
        </ErrorMessage>
      )}
      {!isLoading && !error && (
      <ol>
        {todosList
        && todosList
          .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
          .map(
            todo => (
              <ToDoCard
                key={todo.id}
                title={todo.title}
                id={todo.id}
                description={todo.description}
                checked={todo.checked}
              />
            ),
          )}
      </ol>
      )}

    </HomeContainer>
  );
}

export default Home;
