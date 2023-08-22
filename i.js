const urls = [
    "https://www.ultimahora.com/",
    "https://www.abc.com.py/",
    "https://www.lanacion.com.py/"
  ];
  let indice = 0;
  
  const pagprevia = document.getElementById("pagprevia");
  const pagsiguiente = document.getElementById("pagsiguiente");
  const contentFrame = document.getElementById("contentFrame");
  
  pagprevia.onclick = function(){
	  indice=indice-1
	  if (indice<0)
		indice=urls.length-1;
		actualizar();
  };
  
  pagsiguiente.onclick = function(){
	  indice=indice+1
	  if (indice == urls.length)
		indice=0;
		actualizar();
  };
  
  function actualizar() {
    content.src = urls[indice];
  }
  

  