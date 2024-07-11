import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }
  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const postData = { body: enteredBody, author: enteredAuthor };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={changeBodyHandler} id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
