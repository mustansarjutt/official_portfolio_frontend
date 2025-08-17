import { blogList } from "./BlogsData"

function Headings({ setId, activeId }) {
    return (
        <aside className="text-slate-300 h-full w-full p-1">
            <h1 className="text-xl font-bold mb-3">Blog Posts</h1>
            <ul className="list-none flex flex-col gap-y-2">
                {blogList.map((b) => (
                    <li
                        key={b.id}
                        className={`font-semibold ${activeId === b.id ? "bg-sky-300 text-slate-600" : ""} py-2 px-1.5 hover:bg-sky-200 hover:text-gray-600 rounded-[10px] transition-all duration-200 ease-in cursor-pointer`}
                        onClick={() => setId(b.id)}
                    >
                        {b.title}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Headings