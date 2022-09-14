export const removeMarkdownInContent = (content: string) => {
  return (
    content
      .replace(/!\[.*\]/gi, '') // ![] 제거
      .replace(/\(.*\)/gi, '') // ( ) 제거
      .replace(/\|/gi, '') // | 제거
      .replace(/```/gi, '') // | 제거
      .replace(/#/gi, '') // # 제거
      // .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, ' ') // # 제거
      .replace(/-/gi, '')
  ); // @ 제거
};
