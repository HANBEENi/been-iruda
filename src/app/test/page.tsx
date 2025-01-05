"use client";

import Carousel from "@/components/sections_modules/S3-Projects/Carousel";

export default function TestPage() {
  const exampleImages = [
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
    "images/test.png",
  ];

  return <Carousel images={exampleImages} />;
}
