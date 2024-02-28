import { useRef } from "react";

export default function useSlideControls() {
  const prevSlideControl = useRef(null);
  const nextSlideControl = useRef(null);

  return { prevSlideControl, nextSlideControl };
}
