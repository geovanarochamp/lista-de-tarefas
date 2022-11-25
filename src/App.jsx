import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


import { Container, Content, Input, Button, Titulo3, ListItem, Trash, Check } from './styles.js'


function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finalizarTarefa(id) {
    
    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarTarefa(id) {
    const newList = list.filter( item => item.id !== id )

    setList(newList)
  }

  return (
    // fragment
    <Container>  
      <Content>
        <Input className="input-value" onChange={inputMudou} placeholder="O que tenho pra fazer?" />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (        

            list.map( (item) => (
              <ListItem isFinished={item.finished} key={ item.id } >
                <Check onClick={() => finalizarTarefa(item.id)}/>
                <li> { item.task } </li> 
                <Trash onClick={() => deletarTarefa(item.id)}/>
              </ListItem>
              ))

            ) : (
              <Titulo3>Não há itens na lista.</Titulo3>
            )
          }
        </ul>
      </Content>  
    </Container>
  )
}

export default App