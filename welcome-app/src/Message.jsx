function Message({ age }) {
  return age > 18 ? <p>Sei un adulto</p> : <p>Sei molto giovane!</p>;
}

export default Message;
