const endpoint = `http://localhost:8080/vehicles`;

getAll(endpoint);

function getAll(endpoint) {

    const config = {
        method: 'GET',
    };
    fetch(endpoint, config)
        .then((res) => res.json())
        .then((vehicles) => {
            document.querySelector('tbody').innerHTML = vehicles
            .map((vehicle, index) => {
                return `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${vehicle.id}</td>
                        <td>${vehicle.placa}</td>
                        <td>${vehicle.marca}</td>
                        <td>${vehicle.modelo}</td>
                        <td>${vehicle.cor}</td>
                        <td>${vehicle.ano}</td>
                        <td>
                            <a class="editar" title="Editar" onclick="editvehicle(this)"><button type="button" class="btn-sm btn-secondary">Editar</button>
                            <a class="excluir" title="Excluir" onclick="deletevehicle(this)"><button type="button" class="btn-sm btn-danger">Excluir</button>
                        </td>
                        </tr>`;
                })
            .join('');
        })
}
        
function getFilters(form) {
    var formData = new FormData(form);

    let filters = Array.from(formData.entries())
        .filter(([key,value]) => value != '')
        .map((keyvalue) => keyvalue.join('='))
        .join('&&');

    const newEndPoint = endpoint + '?' + filters;

    getAll(newEndPoint);
}

document.getElementById('filterVehicle').addEventListener('submit', function(e) {
    e.preventDefault();
    getFilters(e.target);
});

function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName('td')[0].childNodes[0]
        .data;
}

