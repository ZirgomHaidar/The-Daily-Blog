import blogicon from "../../assets/blogico.svg"

function Header() {
  return (
    <header className="flex items-center justify-between">
      <span className="flex items-center gap-3">
        <img className="w-12" src={blogicon} alt="Blog" />
        <h1 className="text-4xl font-bold">The Daily Blog</h1>
      </span>
      <div className="post flex items-center gap-5">
        <Results />
        <SearchPosts />
        <button className="border-2 border-purple-400 p-2 bg-purple-400">
          Clear posts
        </button>
      </div>
    </header>
  )
}

export default Header

function SearchPosts() {
  return <input className="border-2 p-2" placeholder="Search posts..." />
}

function Results() {
  return <p>🚀 X atomic posts found</p>
}
