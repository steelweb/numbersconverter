var birlik = ["", 'I', "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var onlik = ["", 'X', "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var yuzlik = ["", 'C', "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var minglik = 'M';
function splitToDigit(n){
    return (n + '').split('').map((i) => { return Number(i); })
  }
function fromAtoR (son) {
    var son = document.getElementById("input").value;
    var k = splitToDigit(son);
if (son >=1 && son < 10) {
    document.getElementById('result').innerHTML = birlik[k[0]];
} else if ( son >= 10 && son <= 99) {
    document.getElementById('result').innerHTML = onlik[k[0]] + birlik[k[1]];
   } else if (son > 99 && son < 1000) {
    document.getElementById('result').innerHTML = yuzlik[k[0]] + onlik[k[1]] + birlik[k[2]];
   } else if (son >= 1000 && son <10000) {
       document.getElementById("result").innerHTML = minglik.repeat(k[0]) + yuzlik[k[1]] + onlik[k[2]] + birlik[k[3]];
   } else {
       document.getElementById('result').innerHTML = "1 dan 10000 gacha son kiriting!";
   }
}

