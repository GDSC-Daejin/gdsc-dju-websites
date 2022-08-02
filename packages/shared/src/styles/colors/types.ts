const ColorGroupNames = [
  'white',
  'grey',
  'green',
  'yellow',
  'green',
  'red',
  'blue',
  'orange',
] as const;
export type ColorGroup = typeof ColorGroupNames[number];

export function isColorGroup(str: string): str is ColorGroup {
  return ColorGroupNames.includes(str as ColorGroup);
}

type MakeColorTokenSet<
  TokenName extends ColorGroup,
  TokenNumber extends number[] | string[],
> = `${TokenName}${TokenNumber[number]}`;

export type ColorToken =
  | 'white'
  | MakeColorTokenSet<'grey', [100, 200, 300, 400, 500, 600, 700, 900]>
  | MakeColorTokenSet<'orange', [100, 200, 300, 400, 500, 600, 700, 900]>
  | MakeColorTokenSet<'yellow', [100, 200, 300, 400, 500, 600, 900]>
  | MakeColorTokenSet<'green', [100, 200, 300, 400, 500, 600, 900]>
  | MakeColorTokenSet<'red', [100, 200, 300, 400, 500, 600, 900]>
  | MakeColorTokenSet<'blue', [100, 200, 300, 400, 500, 600, 900]>;

export type ColorScheme = Record<ColorToken, string>;

export type SemanticColorScheme = {
  background: ColorToken | string;
  backgroundLow: ColorToken | string;
};

export type ColorTheme = ColorScheme & SemanticColorScheme;
