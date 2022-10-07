function total(){
  let c = document.getelementbyid("valor").value;
  let j = document.getelementbyid("juros").value;
  let t = document.getelementbyid("meses").value;
  let r = 0;
  for (let i = 1; i<= t; i++){
   r = c * (1 + j/100));
   document.write("mes" + i + "valor:" + r + "<br>")
   v = r;
  }
  document.write("resultado:" + r)
}
