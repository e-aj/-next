import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

  const [modalIsOpen,setModalIsOpen] = useState(false)


    const deleteHandler=()=>{
        setModalIsOpen(true)
    }

    const closeModalHandler = ()=>{
      setModalIsOpen(false)
    }



  return (
    <div>
      <h2>Title</h2>
      <div>
          <span>{props.text}</span>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
      
    </div>
  );
}

export default Todo;
