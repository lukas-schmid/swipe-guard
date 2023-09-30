import * as ExpoImagePicker from "expo-image-picker";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

interface ImageContextProps {
  images: string[] | null;
  pickImages(): Promise<void>;
}

export const ImageContext = createContext<ImageContextProps>(
  {} as ImageContextProps,
);

export function ImageProvider({ children }: PropsWithChildren) {
  const [images, setImages] = useState<string[] | null>(null);

  const pickImages = useCallback(async () => {
    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const imageUris = result.assets.map((asset) => asset.uri);
      setImages(imageUris);
    }
  }, []);

  const value = useMemo(() => {
    return {
      images,
      pickImages,
    };
  }, [images, pickImages]);

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
