function BlogBody({ title, headings, contents }) {
    return (
        <div className="p-3 text-slate-200 w-full">
            <h1 className="text-[27px] font-bold text-white">{title}</h1>
            {headings.map((h) => (
                <div key={h.id}>
                    <h2 className="text-[22px] font-semibold">{h.label}</h2>
                    <p className="text-[16px] text-slate-400">{contents[h.id]}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogBody