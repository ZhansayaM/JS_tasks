//not clean code
function anyName(a) {
  if (typeof a !== "string") {
    alert("Passed argument is not string!");
  } else {
    a = a.trim();
    if (a.length > 30) {
      a = a.replace(a.substring(30), "...");
    }
    return a;
  }
}

console.log(anyName("456"));
console.log(
  anyName(
    "                                      qwertyuiop[]asdfghjkl;zxcvbnm,.asdfghjklqwertyuikjhgfdxcvbnmqsdcf                     "
  )
);