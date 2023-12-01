//Funciones

function abrirPanel(info){
  Swal.fire({
    title: info.name,
    text: "Encontrame en Github",
    footer: `<a target="_blank" class="btn footerPerfil" href="${info.html_url}">Visita mi página!</a>`,
    imageUrl: info.avatar_url,
    imageAlt: "Custom image",
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonColor: "#ffd900",
    color: "#ffd900",
    background: "#1f2124",
    backdrop: "rgba(0,0,0,0.8)",

  });
}

async function buscarEnGithub() {

  const githubUrl = "https://api.github.com/users/AgustinPisi";
  const response = await fetch(githubUrl);
  if (response.ok) {
    abrirPanel(await response.json());
  }
  else{
      console.log(response);
  }

};

//Programa

let linkCarrito = document.getElementById("carritoIcon");
let elementosCarrito = localStorage.getItem("idCarrito");
if (elementosCarrito) {
    let lista = elementosCarrito.split(","); 
    linkCarrito.innerHTML = linkCarrito.innerHTML + `<span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
    ${lista.length}
    <span class="visually-hidden">unread messages</span>
  </span>`;    
}
