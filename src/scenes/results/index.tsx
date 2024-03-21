import React, { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";

interface ImageModule {
  default: string;
}

const Results: React.FC = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      const importedImagePaths = await importAllImages();
      setImagePaths(importedImagePaths);
    };
    importImages();
  }, []);

  const importAllImages = async () => {
    const imagePathsObject = await import.meta.glob(
      "/src/assets/results/*.jpg"
    );
    const importedImagePaths: string[] = [];
    for await (const key of Object.keys(imagePathsObject)) {
      const imagePathModule = (await imagePathsObject[key]()) as ImageModule;
      const imagePath: string = imagePathModule.default;
      importedImagePaths.push(imagePath);
    }
    return importedImagePaths;
  };

  return <ImageGrid imagePaths={imagePaths} />;
};

export default Results;
