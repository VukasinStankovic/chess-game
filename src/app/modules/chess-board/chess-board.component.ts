import {Component} from '@angular/core';
import {ChessBoard} from "../../chess-logic/chess-board";
import {Color, FENChar, pieceImagePaths} from "../../chess-logic/models";

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {
  public pieceImagePath = pieceImagePaths;

  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;

  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }

  protected readonly pieceImagePaths = pieceImagePaths;
}
