import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler(e) {
    setModalIsVisible(false);
  }
  function showModalHandler(e) {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        ></PostList>
      </main>
    </>
  );
}

export default App;
