import React, { Component } from 'react';
//import { clickCell, shuffle } from './functions';

class Puzzel extends Component {


  swapCells = (cellA, cellB) => {
    //Swap selected cells 'class' by shuffle function
    var temp = document.getElementById(cellA).className;
    document.getElementById(cellA).className = document.getElementById(cellB).className;
    document.getElementById(cellB).className = temp;
  }

  //create new game function and button
  shuffle = () => {
    //Use loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
      for (var column = 1; column <= 3; column++) { //For each column in this row

        var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
        var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

        this.swapCells("cell" + row + column, "cell" + row2 + column2);
      }
    }
  }


  clickCell = (row, column) => {
    //find className
    //console.log(document.getElementById("cell11").Value())

    var cell = document.getElementById('cell' + row + column).className;


    if (cell !== "empty") {

      //if empty space on the right
      if (column < 3) {
        if (document.getElementById("cell" + row + (column + 1)).className === "empty") {
          this.swapCells("cell" + row + column, "cell" + row + (column + 1));
          return;
        }
      }
      //if empty space on the left
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).className === "empty") {
          this.swapCells("cell" + row + column, "cell" + row + (column - 1));
          return;
        }
      }
      //if empty space is above
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).className === "empty") {
          this.swapCells("cell" + row + column, "cell" + (row - 1) + column);
          return;
        }
      }
      //if empty space is below
      if (row < 3) {
        if (document.getElementById("cell" + (row + 1) + column).className === "empty") {
          this.swapCells("cell" + row + column, "cell" + (row + 1) + column);
          return;
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div class="grid-container">
          <div class="grid-x grid-margin-x grid-padding-y">
            <div class="cell header large-9 medium-10 small-10 large-offset-2 small-offset-1 medium-offset-1"
              style={{ height: '20px' }}>
              <span><strong>Isobar- Code Challenging</strong></span><br />
              <span><small>Created by:&nbsp<i>Hamid_Dezhkam</i></small></span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="section">
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell large-9 medium-10 small-10 large-offset-2 small-offset-1 medium-offset-1">
                <div id="table" style={{ display: 'table' }}>
                  <div id="row1" style={{ display: 'table-row' }}>
                    <div id="cell11" className="cell1" onClick={this.clickCell(1, 1)} ref="1"></div>
                    <div id="cell12" className="cell2" onClick={this.clickCell(1, 2)} ref="2"></div>
                    <div id="cell13" className="cell3" onClick={this.clickCell(1, 3)} ref="3"></div>
                  </div>
                  <div id="row2" style={{ display: 'table-row' }}>
                    <div id="cell21" className="cell4" onClick={this.clickCell(2, 1)} ref="4"></div>
                    <div id="cell22" className="cell5" onClick={this.clickCell(2, 2)} ref="5"></div>
                    <div id="cell23" className="cell6" onClick={this.clickCell(2, 3)} ref="6"></div>
                  </div>
                  <div id="row3" style={{ display: 'table-row' }}>
                    <div id="cell31" className="cell7" onClick={this.clickCell(3, 1)} ref="7"></div>
                    <div id="cell32" className="cell8" onClick={this.clickCell(3, 2)} ref="8"></div>
                    <div id="cell33" className="empty" onClick={this.clickCell(3, 3)} ref="9"></div>
                  </div>
                </div>
                <br />
                <br />
                <button type="button" className="primary button" onClick={this.shuffle()}><strong>New Game</strong></button>
                {/* <button type="button" className="success button" onClick="history.go(0);"
                  value="Refresh Page"><strong>Reset
                            Game</strong></button> */}
              </div>
            </div>
          </div>
        </div>
      </div >

    );
  }
}

export default Puzzel;

