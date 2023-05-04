// @ts-nocheck

import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set."
    );
  }

  const output = await replicate.run(
    "prompthero/openjourney:9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",
    {
      input: {
        prompt: `mdjrny-v4 style ${req.body.prompt}, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece`
      }
    })

  const prediction = await replicate.predictions.create({
    // Pinned to a specific version of Stable Diffusion
    // See https://replicate.com/stability-ai/stable-diffusion/versions
    version: "9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",

    // This is the text prompt that will be submitted by a form on the frontend
    input: {
      prompt: `mdjrny-v4 style ${req.body.prompt}, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece`
    },
  });

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
