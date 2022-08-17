import { RefObject, useState } from 'react';

export const useFileToBase64 = (ref: RefObject<HTMLInputElement>) => {
  const reader = new FileReader();
  const [base64, setBase64] = useState<string | undefined>();

  if (ref.current && ref.current.files && ref.current.files[0]) {
    reader.readAsDataURL(ref.current.files[0]);
  }

  reader.onload = () => {
    // Make a fileInfo Object
    setBase64(reader.result?.toString().split(',')[1]);
  };

  return { base64 };
};
