import { Link } from "react-router-dom";
import { NAVIGATION_OPTIONS } from "../../utils/constants";
import { invoke } from "@tauri-apps/api/core";

export default function Home() {
    async function handleExitBtn() {
        await invoke("quit_app");
    }

    return (
        <div className="flex flex-col items-center justify-center h-full gap-2">
            <h1 className="text-3xl font-black text-center text-white uppercase sm:text-6xl h-fit text-stroke-2 ">
                <p className="inline-block scale-y-[2.50] h-fit mb-2 sm:mb-6">
                    buckshot
                </p>
                <p className="scale-x-[1.05] scale-y-125">roulette</p>
                <p className="scale-x-125">sheet</p>
            </h1>

            <p className="w-32 text-sm text-center text-white/90 sm:w-fit sm:text-xl">
                A sheet for Mike Klubnika's game
            </p>

            <section className="flex flex-col gap-1 mt-4 text-3xl text-center uppercase">
                {NAVIGATION_OPTIONS.map((option) => (
                    <Link
                        key={option.label}
                        to={option.href}
                        className="scale-y-125 hover:text-white/40"
                    >
                        {option.label}
                    </Link>
                ))}

                <button
                    type="button"
                    onClick={handleExitBtn}
                    className="uppercase scale-y-125 cursor-pointer hover:text-white/40"
                >
                    exit
                </button>
            </section>
        </div>
    );
}
