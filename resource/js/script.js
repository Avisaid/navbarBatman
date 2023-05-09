const botones = document.querySelectorAll(".navBarra");
const barra = document.querySelector(".barra");
const logo = document.getElementById("imagenDesktop");
const logoA = document.getElementById("textoLogoDesk");

const cambiarColorFuentesNav = (opcion) => {
  if (opcion) {
    botones.forEach((elemento) => {
      elemento.classList.add("fixFont");
    });
  } else {
    botones.forEach((elemento) => {
      elemento.classList.remove("fixFont");
    });
  }
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 40) {
    cambiarColorFuentesNav(true);
    document.getElementById("headerFixed").classList.add("fixheaderNav");
    document.getElementById("headerFixedW").classList.add("fixheader");
    logo.src = "./resource/imagenes/R2.png";
  } else {
    cambiarColorFuentesNav(false);
    document.getElementById("headerFixed").classList.remove("fixheaderNav");
    document.getElementById("headerFixedW").classList.remove("fixheader");
    logo.src = "./resource/imagenes/R.png";
  }
});

// FUNCION QUE ABRE O CIERRA EL MENU DEL NAVBAR EN MODO CELULAR
const menuCelular = document.querySelector(".menuCelular");
const cerrarMenuCelular = function () {
  //al agregar la clase por css le da una propiedad de rotacion
  const flecha = document.querySelector(".flecha");
  flecha.classList.toggle("activeflecha");
  //al agregar la clase muestra o viceversa el menu
  const navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");

  // if (navbar.classList.contains("active")) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.removeAttribute("style");
  // }
};
menuCelular.addEventListener("click", cerrarMenuCelular);
// FUNCION QUE ABRE O CIERRA EL MENU DEL NAVBAR EN MODO CELULAR

// FUNCION QUE RECORRE LAS OPCIONES DEL NAV Y SI NO COINCIDE CON LA QUE SE LE PASE SE LA ELIMINA LA CLASE
const quitarActiveALNav = (textoActivo) => {
  document.querySelectorAll(".navBarra").forEach((link) => {
    if (
      link.classList.contains("activeFont") &&
      link.textContent != textoActivo
    ) {
      link.classList.remove("activeFont");
    }
  });
};
// FUNCION QUE RECORRE LAS OPCIONES DEL NAV Y SI NO COINCIDE CON LA QUE SE LE PASE SE LA ELIMINA LA CLASE

//EVENTOS PARA EL LOGO BATMAN DE VERSION DESKTOP
logoA.addEventListener("click", () => {
  //BORRAR SI EN EL CENTRO NO HABRA TEXTO Y SOLO LOGO
  logo.click();
}); //BORRAR SI EN EL CENTRO NO HABRA TEXTO Y SOLO LOGO

logo.addEventListener("click", () => {
  const titulo = document.getElementById("menuCelTexto");
  translateX = `translateX(${navPDefault})`;
  logo.classList.add("active");
  barra.style.transform = translateX;
  titulo.innerText = "MENÚ";
  quitarActiveALNav("niLobusquesNoExiste");
});
logo.addEventListener("mouseover", () => {
  barra.style.transform = `translateX(${navPDefault})`;
});
logo.addEventListener("mouseout", () => {
  barra.style.transform = `${translateX}`;
});
//EVENTOS PARA EL LOGO BATMAN DE VERSION DESKTOP

//OBETOS CON LA UBICACION DE LAS OPCIONES DEL NAV
//navP = Botones de izquierda a derecha
const navP = {
  avi: "Selina Kyle", //posicionBoton[0]
  servicios: "Servicios", //posicionBoton[1]
  logo: "BATMAN", //posicionBoton[1] BORRAR SI EN EL CENTRO NO HABRA TEXTO Y SOLO LOGO
  proyectos: "Proyectos", //posicionBoton[2]
  bruce: "Bruce Wayne", //posicionBoton[3]
};
const navPDefault = "429px"; //UBICACION DEFAULT(LOGO)
const posicionBoton = ["19px", "234px", "429px", "631px", "835px"]; //posicionBoton[1] BORRAR SI EN EL CENTRO NO HABRA TEXTO Y SOLO LOGO

//OBETOS CON LA UBICACION DE LAS OPCIONES DEL NAV

//UBICACION ACTUAL DE LA BARRA DEL NAV
let translateX = barra.style.transform;
//UBICACION ACTUAL DE LA BARRA DEL NAV

const mouseOclick = (tipo, elemento) => {
  let i = 0;
  const titulo = document.getElementById("menuCelTexto");
  if (tipo === "mouse") {
    for (const boton in navP) {
      if (elemento === navP[boton]) {
        barra.style.transform = `translateX(${posicionBoton[i]})`;
        i = 0;
      }
      i++;
    }
  } else if (tipo === "click") {
    for (const boton in navP) {
      if (elemento === navP[boton]) {
        translateX = `translateX(${posicionBoton[i]})`;
        barra.style.transform = translateX;
        logo.classList.remove("active");
        titulo.innerText = `${elemento}`;
        i = 0;
      }
      i++;
    }
  }
};

// FUNCION DE EFECTO HOVER PARA MOVER LA BARRA DEL NAV
const hoverMouse = (boton) => {
  boton.addEventListener("mouseover", () => {
    const elemento = boton.textContent;
    mouseOclick("mouse", elemento);
  });
  boton.addEventListener("mouseout", () => {
    barra.style.transform = `${translateX}`;
  });
  boton.addEventListener("click", () => {
    boton.classList.add("activeFont");
    const elemento = boton.textContent;
    mouseOclick("click", elemento);
    quitarActiveALNav(elemento);
    cerrarMenuCelular();
  });
};
// FUNCION DE EFECTO HOVER PARA MOVER LA BARRA DEL NAV

// SE LE AGREGA LA FUNCION A CADA ELEMENTO DEL NAV
botones.forEach((link) => {
  hoverMouse(link);
});
// SE LE AGREGA LA FUNCION A CADA ELEMENTO DEL NAV

// OCURRE EL EVENTO DEL LOGO AL CLIQUEAR EN EL LOGO DEL NAV CEL
const menu_logo = document.getElementById("imagenCelular");
menu_logo.addEventListener("click", () => {
  logo.click();
});
// OCURRE EL EVENTO DEL LOGO AL CLIQUEAR EN EL LOGO DEL NAV CEL
