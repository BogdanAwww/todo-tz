import { AddToDo } from './components/AddToDo'
import { ListToDo } from './components/ListToDo'
import { ModalLayout } from './layouts/ModalLayout';

function ToDoApp() {
  
  return (
      <ModalLayout>
        <AddToDo />
        <ListToDo />
      </ModalLayout>
  );
}

export default ToDoApp;
