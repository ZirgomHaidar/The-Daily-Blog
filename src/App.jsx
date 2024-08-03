import Header from "./components/Header/Header"
import { PostProvider, usePosts } from "./components/PostContext/PostContext"

function App() {
  return (
    <>
      <PostProvider>
        <Header />
      </PostProvider>
    </>
  )
}

export default App
