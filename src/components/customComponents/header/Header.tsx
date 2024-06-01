import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Header = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center h-[40rem] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4049793/pexels-photo-4049793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute inset-0 bg-slate-200 opacity-20 dark:bg-black dark:opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <p className="text-neutral-600 dark:text-neutral-100 text-xs sm:text-base">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
