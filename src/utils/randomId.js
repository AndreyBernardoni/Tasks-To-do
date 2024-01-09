export function randomId(params) {
  let randomKey = "";
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 20; i++) {
    randomKey += char.charAt(Math.floor(Math.random() * char.length));
  }
  return randomKey;
}
