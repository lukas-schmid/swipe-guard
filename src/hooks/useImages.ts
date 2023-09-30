import { useContext } from "react";
import { ImageContext } from "src/context/ImageContext";

export const useImages = () => useContext(ImageContext);
