import { useState } from "react"
import { usePosts, createRandomPost } from "../PostContext/PostContext"

function Archive() {
  const { onAddPost } = usePosts()

  const [posts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost())
  )

  const [showArchive, setShowArchive] = useState(false)

  return (
    <aside className="mb-10">
      <h2 className="text-3xl uppercase my-10 ">Post archive</h2>
      <button className="mb-6" onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul className="flex flex-col gap-[2px]">
          {posts.map((post, i) => (
            <li
              className="flex border border-[#d4c6fd] items-center justify-between p-1"
              key={i}
            >
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Archive
