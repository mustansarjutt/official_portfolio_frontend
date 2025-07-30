import { FaBars, FaTimes } from "react-icons/fa"
import { useState, useEffect, useMemo, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Headings from "../blogs/Headings"
import BlogBody from "../blogs/BlogBody"
import { blogList } from "../blogs/BlogsData"

function Blogs() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHeading, setCurrentHeading] = useState(false)

  const selectedBlog = useMemo(() => blogList.find((b) => b.id === id), [id])

  useEffect(() => {
    if (!id && blogList.length > 0) {
      navigate(`/blogs/${blogList[0].id}`, { replace: true })
    }
  }, [id, navigate])

  const handleClick = useCallback((newId) => {
    if (newId !== id) {
      navigate(`/blogs/${newId}`)
    }
    setMenuOpen(false)
  }, [id, navigate])

  return (
    <div className="relative flex flex-col md:flex-row w-full h-full">
      <div className="md:hidden p-3">
        <button
          className="text-2xl text-gray-700"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`fixed md:static top-0 left-0 h-full md:z-[45] z-[100] bg-white p-4 w-[70%] sm:w-[50%] md:w-[20%] md:border-r-2 md:border-r-sky-300 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-end mb-2 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 hover:text-red-600 transition"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <Headings setId={handleClick} activeId={id} currentHeading={currentHeading} />
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/25 z-40 md:hidden"
          aria-label="Close menu overlay"
        ></div>
      )}
      <div className="flex-1 h-full overflow-y-auto bg-slate-100 p-4 md:w-[80%]">
        {!selectedBlog ? (
          <div className="text-slate-800 font-semibold text-xl flex items-center justify-center h-full">
            404 - Blog Not Found
          </div>
        ) : (
          <BlogBody
            title={selectedBlog.title}
            headings={selectedBlog.headings}
            contents={selectedBlog.content}
            onHeadingInView={setCurrentHeading}
          />
        )}
      </div>
    </div>
  )
}

export default Blogs