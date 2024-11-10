import { useEffect, useState } from "react";

export default function App() {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);

    const [totalBullets, setTotalBullets] = useState<number[]>([]);
    const [bulletColors, setBulletColors] = useState<{
        [key: number]: "red" | "blue";
    }>({});

    useEffect(() => {
        const total = red + blue;
        setTotalBullets(Array.from({ length: total }, (_, i) => i + 1));
        setBulletColors({});
    }, [red, blue]);

    const toggleBulletColor = (bulletNumber: number) => {
        setBulletColors((prev) => ({
            ...prev,
            [bulletNumber]: prev[bulletNumber] === "red" ? "blue" : "red",
        }));
    };

    return (
        <main className="container mx-auto overflow-hidden ">
            <div className="flex justify-between border border-brand-green">
                <div className="w-1/2 pr-2 border border-brand-green">
                    <label
                        className="block mb-2 text-sm font-bold text-center"
                        htmlFor="red"
                    >
                        Red
                    </label>

                    <input
                        className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-zinc-900 focus:outline-none focus:shadow-outline"
                        id="red"
                        type="number"
                        value={red}
                        onChange={(e) => setRed(Number(e.target.value) || 0)}
                    />
                </div>

                <div className="w-1/2 pr-2 border border-brand-green">
                    <label
                        className="block mb-2 text-sm font-bold text-center"
                        htmlFor="blue"
                    >
                        Blue
                    </label>

                    <input
                        className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-zinc-900 focus:outline-none focus:shadow-outline"
                        id="blue"
                        type="number"
                        value={blue}
                        onChange={(e) => setBlue(Number(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap h-full gap-4 mt-8">
                {totalBullets.map((num) => (
                    <div
                        key={num}
                        className="flex items-center w-full px-3 py-2 space-x-2"
                    >
                        <input
                            type="checkbox"
                            id={`bullet-${num}`}
                            checked={bulletColors[num] === "red"}
                            onChange={() => toggleBulletColor(num)}
                            className="w-5 h-5 text-red-600 form-checkbox"
                        />
                        <label
                            htmlFor={`bullet-${num}`}
                            className={`font-medium ${
                                bulletColors[num] === "red"
                                    ? "text-red-500"
                                    : "text-blue-500"
                            }`}
                        >
                            Bullet {num}
                        </label>
                    </div>
                ))}
            </div>
        </main>
    );
}
