// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
var chessPattern= "";
var pHeight = 8;
var pWidth =8;

for( i=0; i<pWidth/2; i++){ // build line pattern * * * *
chessPattern +="* ";
}

for( i=0; i<pHeight; i++) { // build board

if (i%2==0) {console.log( " "+ chessPattern);} // odd line

else {console.log(chessPattern);} // even line

}