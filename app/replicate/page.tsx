// @ts-nocheck
'use client'
import { useState } from "react";
import Image from "next/image";
import styles from '@app/page.module.css'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };
  const h1Style = `
`
  return (
    <div className="container max-w-2xl mx-auto p-5">
      <h1 className="
      text-6xl font-extrabold 
      text-transparent bg-clip-text
      bg-gradient-to-b from-[#ffffff] to-[#aaaaaa]
      dark:invert-0
      invert
      text-center
      tracking-tight
      ">
        Dream with{`\n`}
        <a className="
        bg-clip-text bg-gradient-to-b from-[#0070f3] to-[#5ea6f8]
        " href="https://replicate.com/stability-ai/stable-diffusion">
          Stable Diffusion
        </a>
      </h1>

      <div className="mx-auto p-5">
        <form className="w-full flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-inherit dark:invert-0 text-dark flex-grow"
            name="prompt"
            placeholder="Enter a prompt to display an image"
          />
        </form>

        {error && <div>{error}</div>}

        {prediction && (
          <>
            {prediction.output && (
              <div className="image-wrapper mt-5">
                <Image
                  src={prediction.output[prediction.output.length - 1]}
                  alt="output"
                  sizes="100vw"
                  width={600}
                  height={600}
                />
              </div>
            )}
            <p className="py-3 text-sm opacity-50">status: {prediction.status}</p>
          </>
        )}
      </div>
    </div>
  );
}