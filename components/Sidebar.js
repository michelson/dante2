import Link from 'next/link'

export default function Index({ posts }) {
  return (
    <div className="py-5 fixed z-10 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
      <div className="py-5 h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
        <p className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
          Articles
        </p>
        <ul>
          {posts.map((post) => (
            <li 
              key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                  {post.data.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>   
      </div>
    </div>
 )
}