import { memo, useState } from "react"
import { Posts } from "../Posts/Posts"
import { usePosts } from "../PostContext/PostContext"

const Main = memo(function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  )
})

function FormAddPost() {
  const { onAddPost } = usePosts()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = function (e) {
    e.preventDefault()
    if (!body || !title) return
    onAddPost({ title, body })
    setTitle("")
    setBody("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  )
}

export default Main
