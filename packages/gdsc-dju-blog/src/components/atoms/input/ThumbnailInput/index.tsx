import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import ImageIcon from '@assets/icons/imageIcon';

import {
  PostFileImage,
  PostThumbnailInner,
  PostThumbnailWrapper,
  ThumbnailText,
} from './styled';

interface Props {
  imageValue: string;
}

const ThumbnailInput = forwardRef<HTMLInputElement, Props>(
  ({ imageValue }, ref) => {
    const [fileImage, setFileImage] = useState<string | null>(null);

    const filePreview = (
      e: ChangeEvent<HTMLInputElement>,
      files: FileList | undefined | null,
    ) => {
      const reader = new FileReader();
      if (files) {
        const selectFile = files[0];
        if (selectFile && e.target.files) {
          setFileImage(URL.createObjectURL(selectFile));
          reader.readAsDataURL(selectFile);
        }
      }
    };
    useEffect(() => {
      setFileImage(imageValue);
    }, [imageValue]);

    const inputClick = () => {
      document.getElementById('fileInput')?.click();
    };

    return (
      <PostThumbnailWrapper onClick={inputClick}>
        <ThumbnailText>
          <ImageIcon />
          {fileImage ? '썸네일 수정하기' : '썸네일 선택하기'}
        </ThumbnailText>
        <PostThumbnailInner>
          {fileImage && <PostFileImage src={fileImage} />}
        </PostThumbnailInner>
        <input
          ref={ref}
          id={'fileInput'}
          style={{ display: 'none' }}
          type="file"
          onChange={(e) => filePreview(e, e.target?.files)}
        />
      </PostThumbnailWrapper>
    );
  },
);

export default ThumbnailInput;
