document.getElementById("txtBtn").addEventListener("click", cargarTxt);
document.getElementById("jsonBtn").addEventListener("click", cargarJson);
document.getElementById("apiBTN").addEventListener("click", cargarApi);

function cargarTxt(){
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            console.log(data);
            document.getElementById("resultado").innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}

function cargarJson(){
    fetch("empleados.json")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';

            data.forEach(function(empleado){
                html += `
                    <li><b>${empleado.nombre}:</b> ${empleado.puesto}</li>
                `;
            })

            document.getElementById("resultado").innerHTML = html;

        }).catch(function(error){
            console.log(error);
        });
}

function cargarApi(){

    fetch('https://picsum.photos/list')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = ``;

            data.forEach(function(imagen){
                html += `
                    <li>
                        <p>Autor: ${imagen.author}</p>
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                    </li>
                `;
            })

            document.getElementById('resultado').innerHTML = html;

        })

}