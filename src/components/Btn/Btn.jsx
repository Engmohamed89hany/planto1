export default function Btn({text}) {
    return (
        <>
            <style>{`
                @keyframes shine {
                    0% {
                        background-position: 0% 50%;
                    }
            
                    50% {
                        background-position: 100% 50%;
                    }
            
                    100% {
                        background-position: 0% 50%;
                    }
                }
            
                .button-bg {
                    background: conic-gradient(from 0deg, #3A5802, #000, #000, #3A5802, #000, #000, #000, #3A5802);
                    background-size: 300% 300%;
                    animation: shine 10s ease-out infinite;
                }
            `}</style>
            <div className="w-fit button-bg cursor-pointer rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                <button className="px-8 cursor-pointer text-sm py-2.5 text-white rounded-full font-medium bg-[#1a2217]">
                    {text}
                </button>
            </div>
        </>
    );
};