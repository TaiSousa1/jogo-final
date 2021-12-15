let personagem  =  documento . querySelector ( '#personagem' )
let  quadrado  =  document . querySelector ( '#quadrado' )

function  pular ( ) {
    if ( personagem . classList  ! =  'animar' ) {
        personagem . classList . add ( 'animar' )
    }

    setTimeout ( function ( ) {
        personagem . classList . remover ( 'animar' )
    } ,  500 )
}

var  testarColisao  =  setInterval (  function ( ) {

    var  topoPersonagem  =  parseInt (
     janela . getComputedStyle ( personagem ) . getPropertyValue ( 'top' )
    )
    var  EsquerdaQuadrado  =  parseInt (
        janela . getComputedStyle ( Quadrado ) . getPropertyValue ( 'left' )
       )

       if ( EsquerdaQuadrado  <  20  &&  EsquerdaQuadrado  >  0  &&  topoPersonagem  > =  130 ) {
        quadrado . estilo . animação  =  'nenhum'
        quadrado . estilo . display  =  'nenhum'
        alerta ( 'Você Perdeu!' )
    }
    

} ,  10 )
