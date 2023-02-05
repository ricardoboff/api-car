let idParam = "";

function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName("td")[0].childNodes[0]
        .data;
}

async function editvehicle(el) {
    const id = getId(el);
    idParam = id;
    getByid(id);
}

function getByid(id) {
    const newEndpoint = endpoint + "/" + id;

    const config = {
        method: "GET",
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    fetch(newEndpoint, config)
        .then((res) => {
            return res.json();
        })
        .then((vehicle) => {
            completeForm(vehicle);
        });
}

function completeForm(vehicle) {
    document.getElementById("editForm").innerHTML = `
    <b>ID: ${vehicle.id}</b>
    <nav class="navbar navbar-light bg-light">
    <form class="form-inline" id="editForm">
      <input type="text" class="form-control mr-sm-1" placeholder="placa: ${vehicle.placa}" id="placa" name="placa">
      <input type="text" class="form-control mr-sm-1" placeholder="marca: ${vehicle.marca}" id="marca" name="marca">
      <input type="text" class="form-control mr-sm-1" placeholder="modelo: ${vehicle.modelo}" id="modelo" name="modelo">
      <input type="text" class="form-control mr-sm-1" placeholder="cor: ${vehicle.cor}" id="cor" name="cor" >
      <input type="text" class="form-control mr-sm-1"  placeholder="ano: ${vehicle.ano}" id="ano" name="ano">
      <button class="btn-sm btn-outline-primary my-1 my-sm-2 " onclick="post(this)" type="submit">Salvar</button>
    </form>
    </nav>
    <br>
    `;
}

function post(btn) {
    event.preventDefault();
    const form = btn.parentNode;
    var formData = new FormData(form);
    let changes = Object.fromEntries(formData);

    Object.keys(changes).forEach((key) => {
        if (!changes[key]) {
            delete changes[key];
        }
    });

    const config = {
        method: "PATCH",
        body: JSON.stringify(changes),
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    const newEndpoint = endpoint + "/" + idParam;

    fetch(newEndpoint, config).then(() => {
        location.href = "/";
    });
}
