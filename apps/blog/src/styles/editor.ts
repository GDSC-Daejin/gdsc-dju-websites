import styled from 'styled-components';

export const EditorStyle = styled.div`
  .cm-gutters {
    display: none;
  }
  .cm-placeholder {
    color: ${({ theme }) => theme.colors.grey500};
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .ͼo,
  .ͼp {
    background-color: ${({ theme }) => theme.colors.background};
  }
  .ͼx,
  .ͼy,
  .ͼz,
  .ͼ14,
  .ͼ13,
  .ͼ12,
  .ͼ11,
  .ͼ10,
  .ͼ9,
  .ͼ8,
  .ͼ7,
  .ͼ6,
  .ͼ5,
  .ͼ4,
  .ͼ3,
  .ͼ2,
  .ͼ1 {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .cm-activeLine {
    background-color: transparent;
  }
  .cm-selectionMatch {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    background-color: ${({ theme }) => theme.colors.blue400};
  }
  .cm-focused {
    outline: none !important;
  }

  .cm-focused .cm-selectionBackground,
  ::selection {
    background: ${({ theme }) => theme.colors.grey400};
  }

  .cm-line {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    color: ${({ theme }) => theme.colors.grey900};
  }

  .cm-content {
    font-family: 'Spoqa Han Sans Neo', 'Google Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
`;
