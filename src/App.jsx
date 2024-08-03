import Archive from "./components/Archive/Archive"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { PostProvider } from "./components/PostContext/PostContext"

function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </>
  )
}

export default App
