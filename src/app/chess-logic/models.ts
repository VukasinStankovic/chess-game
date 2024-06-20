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
