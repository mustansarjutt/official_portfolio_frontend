import { useState } from "react";

function Card({ image, heading, description }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer md:max-w-80 max-w-72 bg-gray-900 h-[380px]"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
        alt="City skyline"
        className="w-full h-52 object-cover"
      />
      <div className="flex justify-center items-center">
        <div>
          <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-slate-200">
            {heading}
          </h3>
          <p className="text-sm px-4 pb-6 text-gray-400 w-5/6">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;