console.log(problem9());

function problem9(){

  array=[];
  for(a=2;a<1000;a++){
    for (b=2;b<1000;b++){
    let x=Math.pow(a,2) + Math.pow(b,2);
      let c= Math.pow(x,0.5);
      if (c==Math.floor(c)){
        if (a + b + c == 1000){
          array.push(a,b,c, a*b*c);
          return array;
        }
      }
    }
  }

}
