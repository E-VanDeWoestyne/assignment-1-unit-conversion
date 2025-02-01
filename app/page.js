import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="font-bold text-4xl text-black">Unit Conversion Site</h1>
        <h3 className="font-semibold text-black">
          Please select a unit type above.
        </h3>
      </main>
    </div>
  );
}
