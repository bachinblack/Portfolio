<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
  <Toast.Header>
    <img
      src="holder.js/20x20?text=%20"
      className="rounded mr-2"
      alt=""
    />
    <strong className="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
</Toast>