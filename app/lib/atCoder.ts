//PracticeA Welcome to AtCoder
function Main(input: string) {
  const lines = input.split("\n");
  const tmp = input[1].split(" ");

  var a = parseInt(lines[0], 10);
  var b = parseInt(tmp[0], 10);
  var c = parseInt(tmp[1], 10);
  var s = input[2];

  console.log(`${a + b + c} ${s}`);
}

//ABC086A - Product
function Product(input: string) {
  const tmp = input.split(" ");

  const a = parseInt(tmp[0], 10);
  const b = parseInt(tmp[1], 10);
  if ((a * b) % 2 === 1) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
