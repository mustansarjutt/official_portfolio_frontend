import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { blogList } from "../blogs/BlogsData"

function BlogSection({ id, label, content, onVisible }) {
  const { ref, inView } = useInView({ threshold: 0.7 })

  useEffect(() => {
    if (inView) {
      onVisible(id)
    }
  }, [inView, id, onVisible])

  return (
    <section ref={ref} id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{label}</h2>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{content}</p>
    </section>
  )
}

function Blogs() {
  const [selectedBlogId, setSelectedBlogId] = useState(blogList[0].id)
  const [activeSectionId, setActiveSectionId] = useState(null)
  const selectedBlog = blogList.find((b) => b.id === selectedBlogId)

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Blog List Sidebar */}
      <aside className="w-full md:w-1/5 bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r overflow-y-auto sticky top-0 md:h-screen z-10">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Blog Posts</h2>
        {blogList.map((blog) => (
          <div
            key={blog.id}
            onClick={() => {
              setSelectedBlogId(blog.id)
              setActiveSectionId(null)
            }}
            className={`cursor-pointer text-sm sm:text-base p-2 rounded-md mb-2 transition-colors duration-200 hover:bg-blue-100 ${
              blog.id === selectedBlogId ? "bg-blue-200 font-semibold" : ""
            }`}
          >
            {blog.title}
          </div>
        ))}
      </aside>

      {/* Main Blog Content */}
      <main className="w-full md:w-3/5 p-4 sm:p-6 overflow-y-auto scroll-smooth h-screen">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">{selectedBlog.title}</h1>
        {selectedBlog.headings.map((sec) => (
          <BlogSection
            key={sec.id}
            id={sec.id}
            label={sec.label}
            content={selectedBlog.content[sec.id]}
            onVisible={(id) => setActiveSectionId(id)}
          />
        ))}
      </main>

      {/* Section Navigation Sidebar */}
      <aside className="w-full md:w-1/5 bg-gray-50 p-4 md:p-6 border-t md:border-t-0 md:border-l sticky top-0 md:h-screen overflow-y-auto z-10">
        <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Sections</h2>
        <ul className="space-y-2 text-sm sm:text-base text-gray-700">
          {selectedBlog.headings.map((sec) => (
            <li
              key={sec.id}
              className={`cursor-pointer transition-colors duration-150 hover:text-blue-400 ${
                activeSectionId === sec.id ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() =>
                document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {sec.label}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Blogs