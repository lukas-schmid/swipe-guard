import { useContext } from "react";
import { ImageContext } from "src/context/ImageContext";

export const useImagePicker = () => useContext(ImageContext);
