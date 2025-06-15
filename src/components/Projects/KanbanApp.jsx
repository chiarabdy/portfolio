'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Confetti from 'react-confetti';

const initialData = {
  tasks: {},
  columns: {
    'column-1': { id: 'column-1', title: 'To Do', taskIds: [] },
    'column-2': { id: 'column-2', title: 'In Progress', taskIds: [] },
    'column-3': { id: 'column-3', title: 'Done ✅', taskIds: [] },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const KanbanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  min-height: calc(100vh - 81px);
`;

const BoardContainer = styled.div`
  display: flex;
`;

const ColumnContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #e9ebee;
`;

const ColumnTitle = styled.h3`
  padding: 16px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#e3f2fd' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

const TaskContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#e2f7f1' : 'white')};
`;

const AddTaskForm = styled.form`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export default function KanbanApp() {
  const [data, setData] = useState(initialData);
  const [showConfetti, setShowConfetti] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskContent.trim()) return;

    const newTaskId = `task-${Date.now()}`;
    const newTask = { id: newTaskId, content: newTaskContent };

    const startColumn = data.columns['column-1'];
    const newTaskIds = Array.from(startColumn.taskIds);
    newTaskIds.push(newTaskId);

    const newState = {
      ...data,
      tasks: { ...data.tasks, [newTaskId]: newTask },
      columns: {
        ...data.columns,
        [startColumn.id]: { ...startColumn, taskIds: newTaskIds },
      },
    };

    setData(newState);
    setNewTaskContent('');
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...start, taskIds: newTaskIds };
      const newState = { ...data, columns: { ...data.columns, [newColumn.id]: newColumn } };
      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };
    
    if (newFinish.id === 'column-3') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
    
    const newState = { ...data, columns: { ...data.columns, [newStart.id]: newStart, [newFinish.id]: newFinish } };
    setData(newState);
  };

  return (
    <KanbanWrapper>
      {showConfetti && <Confetti />}
      <h1>Kanban Task Tracker</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          {data.columnOrder.map(columnId => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
            
            return (
              <ColumnContainer key={column.id}>
                <ColumnTitle>{column.title}</ColumnTitle>
                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                      {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <TaskContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging}>
                              {task.content}
                            </TaskContainer>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
                {column.id === 'column-1' && (
                  <AddTaskForm onSubmit={handleAddTask}>
                    <input type="text" value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)} placeholder="New task..." />
                    <button type="submit">Add Task</button>
                  </AddTaskForm>
                )}
              </ColumnContainer>
            );
          })}
        </BoardContainer>
      </DragDropContext>
    </KanbanWrapper>
  );
}