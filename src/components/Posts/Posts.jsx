import { usePosts } from "../PostContext/PostContext"

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
      <ul className="grid grid-cols-5 gap-8">
        {posts.map((post, i) => (
          <li
            className="border border-[#B197FC] py-4 px-5 hover:bg-[#B197FC]"
            key={i}
          >
            <h3 className="text-xl font-medium mb-4 capitalize">
              {post.title}
            </h3>
            <p className="font-normal">{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export { Posts, List }
