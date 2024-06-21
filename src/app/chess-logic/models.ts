export enum Color{
  White,
  Black
}

export type Coords = {
  x: number;
  y: number;
}
// imenovanje figura prema Forsyth-Edwards Notation notaciji, vise na linku: https://www.chess.com/terms/fen-chess
export enum FENChar {
  WhitePawn = "P",
  WhiteKnight = "N",
  WhiteBishop = "B",
  WhiteRook = "R",
  WhiteQueen = "Q",
  WhiteKing = "K",
  BlackPawn = "p",
  BlackKnight = "n",
  BlackBishop = "b",
  BlackRook = "r",
  BlackQueen = "q",
  BlackKing = "k",
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: "assets/pieces/beli pešak.svg",
  [FENChar.WhiteKnight]: "assets/pieces/beli kralj.svg",
  [FENChar.WhiteBishop]: "assets/pieces/beli lovac.svg",
  [FENChar.WhiteRook]: "assets/pieces/beli top.svg",
  [FENChar.WhiteQueen]: "assets/pieces/bela kraljica.svg",
  [FENChar.WhiteKing]: "assets/pieces/beli kralj.svg",
  [FENChar.BlackPawn]: "assets/pieces/crni pešak.svg",
  [FENChar.BlackKnight]: "assets/pieces/crni konj.svg",
  [FENChar.BlackBishop]: "assets/pieces/crni lovac.svg",
  [FENChar.BlackRook]: "assets/pieces/crni top.svg",
  [FENChar.BlackQueen]: "assets/pieces/crna kraljica.svg",
  [FENChar.BlackKing]: "assets/pieces/crni kralj.svg"
}
