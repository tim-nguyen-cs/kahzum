export function generateGradientCanvas(ctx, startColor, stopColor) {

  function gradient(color0, color2) {
    let fillColor: CanvasGradient = ctx.createLinearGradient(0, 0, 0, 400);
    fillColor.addColorStop(0, color0); //starting corner
    fillColor.addColorStop(1, color2); //ending Corner
    //ctx.fillStyle = fillColor;
    return fillColor
  }

  let colors = [];

  for(let i = 0; i < 9; i ++) {
    colors.push(random_rgba())
  }


  //chose a number between 0 and 7
  var randomNumber = Math.floor(Math.random() * (colors.length - 1));
  var randomNumber2 = Math.floor(Math.random() * (colors.length - 1));

  //when the 2 random Numbers equal the same it creates another randomNumber2
  if (randomNumber === randomNumber2) {
    randomNumber2 = randomNumber + 1;
  } else if (randomNumber === 7 && randomNumber2 === 7) {
    randomNumber2 = randomNumber - 1;
  }

  //diagonal
  console.log(colors)
  console.log(randomNumber)
  console.log(randomNumber2)
  console.log("colors: ", colors[randomNumber], colors[randomNumber2])
  

  return gradient(startColor, stopColor)
  //ctx.fillRect(0, 0, 300, 150);
}

export function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '.7'+ ')';
}