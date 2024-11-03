import NavigationOptions from "./components/navigation-options";

export default function App() {
    return (
        <main className="h-screen antialiased text-white bg-brand-black font-averia">
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

                <NavigationOptions />
            </div>
        </main>
    );
}
