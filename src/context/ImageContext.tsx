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
  isLoading: boolean;
}

export const ImageContext = createContext<ImageContextProps>(
  {} as ImageContextProps,
);

export function ImageProvider({ children }: PropsWithChildren) {
  const [images, setImages] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImages = useCallback(async () => {
    setIsLoading(true);
    try {
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
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(() => {
    return {
      images,
      pickImages,
      isLoading,
    };
  }, [images, pickImages, isLoading]);

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
