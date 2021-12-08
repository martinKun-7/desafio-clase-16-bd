const socket = io();

// Productos

socket.on("back", (data) => {
  render(data);
});

const render = (data) => {
  let html = data
    .map((x) => {
      return `   
      <tr>
          <td>${x.title}</td>   
          <td>${x.price}</td>
          <td>
            <img
              src="${x.thumbnail}"
              alt="${x.thumbnail}"
              class="img-thumbnail"
            />
          </td>
        </tr>`;
    })
    .join("");

  document.querySelector("#tbody").innerHTML = html;
};

const addInfo = () => {
  let dataObj = {
    title: document.querySelector("#title").value,
    price: document.querySelector("#price").value,
    thumbnail: document.querySelector("#thumbnail").value,
  };
  socket.emit("dataObj", dataObj);
  document.querySelector("#title").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#thumbnail").value = "";

  return false;
};

// Chat

socket.on("backMensaje", (dataMens) => {
  renderMens(dataMens);
});

const renderMens = (data) => {
  let html = data
    .map((x) => {
      return ` <p>
                  <strong class="text-primary"> ${x.nombre}</strong>
                  <span class=" text-danger"> ${x.fecha}</span>: 
                  <span class="fst-italic text-success"> ${x.mensaje}</span>
                </p>`;
    })
    .join(" ");

  document.querySelector("#mensajes").innerHTML = html;
};

const addMenssage = () => {
  let dataObj = {
    nombre: document.querySelector("#nombre").value,
    mensaje: document.querySelector("#mensaje").value,
  };

  socket.emit("dataMensaje", dataObj);

  document.querySelector("#mensaje").value = "";
  return false;
};
