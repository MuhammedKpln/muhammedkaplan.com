import { useCallback } from "react";
import toast from "react-hot-toast";

export default function Footer() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    toast("Opps, seems like i haven't implemented this yet..", {
      style: {
        backgroundColor: "rgb(253 224 71 / 0.05)",
        color: "#f0f0f0",
        border: "1px solid rgb(253 224 71 / 0.3)",
      },
      position: "bottom-right",
    });
  }, []);

  return (
    <>
      <div className="bg-yellow-300/5 mt-auto pt-8 border-t border-yellow-300/30">
        <footer className="container mx-auto">
          <h3 className="text-lg lg:text-xl mb-2 font-semibold text-gray-300">
            Get notified right away!
          </h3>
          <p className="text-sm lg:text-base mb-6 text-gray-500">
            If you don't want to miss what I write, please enter your email
            address below to subscribe.
          </p>
          <form
            className="flex flex-col lg:flex-row items-center gap-2.5"
            onSubmit={onSubmit}
          >
            <input
              className="w-full lg:w-[400px] h-10 rounded-full px-4 bg-white/10 text-sm lg:text-base"
              type="text"
              placeholder="Your e-mail address"
            />
            <button
              type="submit"
              className="h-10 rounded-full transition-colors whitespace-nowrap text-sm lg:text-base bg-yellow-700 px-8 hover:bg-yellow-600 w-full lg:w-auto"
            >
              Subscribe
            </button>
          </form>
        </footer>

        <p className="text-center py-3 text-xs text-yellow-300/50">
          <a href="https://github.com/muhammedkpln/muhammedkaplan.com">
            Designed & Built by Muhammed Kaplan
          </a>
        </p>
      </div>
    </>
  );
}
