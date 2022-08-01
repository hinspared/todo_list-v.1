import React from 'react';
import Container from '@mui/material/Container';
import Text from '../header/Text';
import { Stack } from '@mui/material';
import TodoItem from './TodoItem';
import Dialog from './Dialog';

import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <Container maxWidth="md" sx={{ paddingTop: '3rem' }}>
      <Text size="1rem" color="gray" weight="400">
        INBOX
      </Text>
      <Stack spacing={3}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            place={todo.place}
            time={todo.time}
          />
        ))}
      </Stack>
      <Dialog />
    </Container>
  );
}