import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useMediaQuery from "../hooks/useMediaQuery";

interface Props {
  imagePaths: string[];
}

const ImageGrid: React.FC<Props> = ({ imagePaths }) => {
  // Sort the image paths numerically
  const sortedImagePaths = imagePaths.sort((a, b) => {
    const indexA = parseInt(a.split("/").pop() || "0");
    const indexB = parseInt(b.split("/").pop() || "0");
    return indexB - indexA;
  });

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // State to manage the open/close state of the dialog
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  // Function to open the image dialog
  const openImageDialog = (index: number) => {
    setOpenImageIndex(index);
  };

  // Function to close the image dialog
  const closeImageDialog = () => {
    setOpenImageIndex(null);
  };

  const currentYear = new Date().getFullYear();

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="relative grid grid-cols-1 gap-3 p-3 mt-20 md:mt-0 md:pt-3 md:grid-cols-3 md:gap-7 md:pl-7">
      {sortedImagePaths.map((imagePath, index) => (
        <div key={index} className="relative">
          <div
            onClick={() => openImageDialog(index)}
            className="relative top-0 left-0 right-0 p-2 text-center bg-black cursor-pointer md:p-4 opacity-90"
          >
            {/* Calculate the month and year index using modulus to ensure they loop */}
            <span className="text-white">{`${monthNames[(index + 2) % 12]} ${currentYear + Math.floor((index + 2) / 12)}`}</span>
          </div>
          <div
            onClick={() => openImageDialog(index)}
            className="cursor-pointer"
          >
            <img
              src={imagePath}
              alt={`Image ${index}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}

      {/* Dialog for displaying the clicked image */}
      {isAboveMediumScreens && (
        <Dialog.Root
          open={openImageIndex !== null}
          onOpenChange={closeImageDialog}
        >
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-50 outline-none outline-0" />
          <Dialog.Content className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {openImageIndex !== null && (
              <>
                <span className="flex items-center justify-center p-3 text-white bg-black opacity-90">
                  {`${monthNames[(openImageIndex + 2) % 12]} ${currentYear + Math.floor((openImageIndex + 2) / 12)}`}
                </span>
                <img
                  src={sortedImagePaths[openImageIndex]}
                  alt={`Image ${openImageIndex}`}
                  className="max-w-full max-h-full"
                />
              </>
            )}
          </Dialog.Content>
        </Dialog.Root>
      )}
    </div>
  );
};

export default ImageGrid;
