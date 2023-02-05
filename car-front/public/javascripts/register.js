// Recuperar o botão no HTML
const btn = document.querySelector("button");

// Atribuir um evento ao botão
btn.onclick = () => {
    const fields = document.querySelectorAll("input");

    const data = {};
    
    fields.forEach((field) => {
        console.log(field.id, field.value);
        data[field.id] = field.value;
    });

    console.log(data);
    console.log(JSON.stringify(data));

    const endpoint = `http://localhost:8080/vehicles/`;

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })
    };

    fetch(endpoint, config)
        .then((res) => {
            if(res.ok) location.href = "/";
        })
        .catch(() => console.error("FALHA AO CADASTRAR"));

}

document.getElementById("registerVehicle").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});