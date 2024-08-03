import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { PostProvider } from "./components/PostContext/PostContext"

function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <Main />
      </PostProvider>
    </>
  )
}

export default App
