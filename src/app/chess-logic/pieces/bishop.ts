import {Color, Coords, FENChar} from "../models";
import {Piece} from "./piece";

export class Bishop extends Piece {
    //
    protected override _FENChar: FENChar;
    // kretanje lovca
    protected override _directions: Coords[] = [
      {x: 1, y: 1},
      {x: 1, y: -1},
      {x: -1, y: 1},
      {x: -1, y: -1},
    ];

    // kreiranje instance lovca u zavisnosti od boje
    constructor(private pieceColor: Color) {
      super(pieceColor);
      // ako je boja bela _FENChar = B odnosno b ako je boja crna
      this._FENChar = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
    }

}
