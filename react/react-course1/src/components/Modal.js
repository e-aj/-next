function Modal(props) {
  const cancelHandler= ()=>{
    props.onCancel()
  }

  const confirmHandler = ()=>{
    props.onConfirm()
  }

  return (
    <div>
      <p>Are yuu sure?</p>
      <button onClick={cancelHandler}>Cancel</button>
      <button onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
