import { memo, useState } from "react"
import { Posts } from "../Posts/Posts"
import { usePosts } from "../PostContext/PostContext"

const Main = memo(function Main() {
  return (
    <main className="mb-10">
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
    <form className="flex gap-6 mb-10 p-6 bg-purple-50" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        className="flex flex-1 h-12"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button className="w-48">Add post</button>
    </form>
  )
}

export default Main
