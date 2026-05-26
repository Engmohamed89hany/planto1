import Heading from "../Heading/Heading";

export default function Gallery({ imgs = [] }) {
  return (
    <div className="mt-16 hidden md:block">
      <Heading text="Our Latest Creations" />
      
      <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
        {imgs.map((img, index) => (
          <div
            key={index}
            className="relative group flex-grow transition-all hover:scale-105 w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={img}
              alt={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
