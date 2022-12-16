export interface RefreshToken {
  header: {
    code: number;
  };
  body: {
    data: {
      token: string;
    };
  };
}
