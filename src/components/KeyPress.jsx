const key1 = "x";
const key2 = "z";
let keyDown = [false, false];


function keyPress(ekey, down) {
  if (ekey == key1 || ekey == key2) {
    let key = ekey == key1;
    let keyID = key ? "key1" : "key2";
    if (keyDown[key] && down) return;
    keyDown[key] = down;

    if (down) {
      document.getElementById(keyID).style.background = "#4e5874";
      document.getElementById(keyID).style.transform = "scale(1.04)";
    } else {
      document.getElementById(keyID).style.background = "#667293";
      document.getElementById(keyID).style.transform = "scale(1)";
    }
    return down;
  }
}

export default keyPress;