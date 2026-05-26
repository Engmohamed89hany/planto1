import React from "react";

export default function ClientCard() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  // Adjust the threshold value to control the tilt effect
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div
      className="rounded-[30px] shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-[rgba(255,255,255,0.08)] backdrop-blur-md mt-10 w-full"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="pt-6 flex flex-row items-center justify-between">
        <img
          src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
          alt="City skyline"
          className="w-[80px] h-[80px] rounded-full object-cover mx-3"
        />
        <div>
          <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-100">
            Maxn Raval
          </h3>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <span key={index} className="text-yellow-500 text-[10px] mx-px">
              <i className="fa-solid fa-star"></i>
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm px-4 pb-6 text-gray-300 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        tenetur dolorum repellendus voluptas suscipit qui rerum officiis, optio
        commodi, magni, omnis enim nostrum itaque aliquam a error doloremque!
        Ipsam, totam quisquam quidem, incidunt fugiat perspiciatis dolorem
        laboriosam quo dolorum repellendus minima ut debitis sunt aut modi velit
        repellat. Debitis, rem.
      </p>
    </div>
  );
}
