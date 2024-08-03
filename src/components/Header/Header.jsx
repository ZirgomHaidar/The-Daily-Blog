import blogicon from "../../assets/blogico.svg"
import { usePosts } from "../PostContext/PostContext"

function Header() {
  const { onClearPosts } = usePosts()
  return (
    <header className="flex items-center justify-between">
      <span className="flex items-center gap-3">
        <img className="w-12" src={blogicon} alt="Blog" />
        <h1 className="text-4xl font-bold">The Daily Blog</h1>
      </span>
      <div className="post flex items-center gap-5">
        <Results />
        <SearchPosts />
        <button
          className="border-2 border-purple-400 p-2 bg-purple-400"
          onClick={onClearPosts}
        >
          Clear posts
        </button>
      </div>
    </header>
  )
}

export default Header

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts()
  return (
    <input
      className="border-2 p-2"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  )
}

function Results() {
  const { posts } = usePosts()
  return (
    <p className="text-2xl font-semibold">
      🚀 {posts.length} atomic posts found
    </p>
  )
}

function Posts() {
  return (
    <section>
      <List />
    </section>
  )
}

function List() {
  const { posts } = usePosts()

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* <Test /> */}
    </>
  )
}
