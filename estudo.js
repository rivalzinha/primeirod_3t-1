
função  moeda ( atual ) {
  retorno  atual . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;
}

função  total ( ) {
    seja  c  =  documento . getElementById ( "valor" ) . valor ;
    seja  j  =  documento . getElementById ( "juros" ) . valor ;
    seja  t  =  documento . getElementById ( "meses" ) . valor ;
    if  ( ! Número ( c ) ) {
       alert ( "O Capital deve ser números." ) ;
       documento . getElementById ( "valor" ) . valor  =  "" ;
       documento . getElementById ( "valor" ) . foco ( ) ;
       Retorna
    }
    if  ( ! Número ( j ) ) {
      alert ( "O Capital deve ser números." ) ;
      documento . getElementById ( "juros" ) . valor  =  "" ;
      documento . getElementById ( "juros" ) . foco ( ) ;
      Retorna
    }
    if  ( ! Número ( t ) ) {
      alert ( "O Capital deve ser números." ) ;
      documento . getElementById ( "meses" ) . valor  =  "" ;
      documento . getElementById ( "meses" ) . foco ( ) ;
      Retorna
    }
    
  
    deixe -  me  =  "" ;
    for ( deixe  i  =  1 ;  i  <=  t ;  i ++ ) {
        r  =  c  *  ( 1+ ( j / 100 ) ) ; _  
        mes  +=  "Mês "  +  i  +  " valor: "  +  moeda ( r )  + "<br>" ;
        //document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
        c  =  r ;
    }
    documento . getElementById ( "mes" ) . innerHTML = mes ;

    documento . getElementById ( "total" ) . innerHTML = "Total: " + moeda ( r ) ;
    //document.write("Resultado: " + moeda(r));
  }
  
  
  função  adicao ( ) {
  deixe  val1  =  documento . getElementById ( "v1" ) . valor ;
  deixe  val2  =  documento . getElementById ( "v2" ) . valor ;
  let  r  =  Número ( val1 )  +  Número ( val2 ) ;
  documento . getElementById ( "resultado" ) . innerHTML  = r ;
  }
  
  função  subtração ( ) {
    deixe  val1  =  documento . getElementById ( "v1" ) . valor ;
    deixe  val2  =  documento . getElementById ( "v2" ) . valor ;
    let  r  =  Número ( val1 )  -  Número ( val2 ) ;
    documento . getElementById ( "resultado" ) . innerHTML  = r ;
    }
  
    função  divisão ( ) {
      deixe  val1  =  documento . getElementById ( "v1" ) . valor ;
      deixe  val2  =  documento . getElementById ( "v2" ) . valor ;
      let  r  =  Número ( val1 )  /  Número ( val2 ) ;
      documento . getElementById ( "resultado" ) . innerHTML  = r ;
      }
    
      função  multiplicação ( ) {
        deixe  val1  =  documento . getElementById ( "v1" ) . valor ;
        deixe  val2  =  documento . getElementById ( "v2" ) . valor ;
        let  r  =  Número ( val1 )  *  Número ( val2 ) ;
        documento . getElementById ( "resultado" ) . innerHTML  = r ;
        }
        função  % ( ) {
          deixe  val1  =  documento . getElementById ( "v1" ) . valor ;
          deixe  val2  =  documento . getElementById ( "v2" ) . valor ;
          seja  c  =  100
          deixe  p  =  Número ( val2 )   /  Número ( c )
          let  r  =  Número ( val1 )  *  Número ( p ) ;
          documento . getElementById ( "resultado" ) . innerHTML  = r ;
          }
função  calcularRaiz ( ) {
  deixe  a  =  documento . getElementById ( "a" ) . valor ;
  seja  b  =  documento . getElementById ( "b" ) . valor ;
  seja  c  =  documento . getElementById ( "c" ) . valor ; 
  deixe  delta ,  raiz ,  x1 ,  x2 ;
  delta  =  ( b * b )  -  ( 4 * a * c ) ;
  if ( delta  >=  0 ) {
    raiz  =  Math . sqrt ( delta ) ;
    x1  =  ( ( -b ) + raiz ) / ( 2 * a ) ; _
    x2  =  ( ( -b ) -raiz ) / ( 2 * a ) ; _ _
    raiz  =  "x1=" + Numero ( x1 ) + "x2=" + Numero ( x2 ) ;
  } senão {
    raiz  =  "Não tem Raiz Real" ;
  }
  documento . getElementById ( "raiz" ) . innerHTML  =  raiz ;
}
