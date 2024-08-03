import blogicon from "../../assets/blogico.svg"

function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold underline">
        <span>
          <img className="w-24" src={blogicon} alt="Blog" />
        </span>
        The Daily Blog
      </h1>
    </header>
  )
}

export default Header
