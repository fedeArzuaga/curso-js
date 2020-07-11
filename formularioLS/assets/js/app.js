const listaTweets = document.querySelector("#lista-tweets");

// Events Listeners
eventListeners();

function eventListeners(){

	// Cuando se envia el formulario
	document.querySelector("#formulario").addEventListener("submit", agregarTweet);

	// Borrar tweets
	listaTweets.addEventListener("click", borrarTweet);

	// Listar todos los tweets almacenados en el local storage
	window.addEventListener("load", listarTweets);

}

// Funciones

// Agregar tweet del formulario
function agregarTweet(e){
	e.preventDefault();

	//Leer el valor del textarea
	const tweet = document.getElementById("tweet").value;

	// Crear elemento y agregarle el contenido
	const li = document.createElement("li");
	li.innerHTML = tweet;

	// Crear boton de eliminar
	const botonBorrar = document.createElement("a");
	botonBorrar.classList.add("borrar-tweet");
	botonBorrar.innerHTML = "X";

	li.appendChild(botonBorrar);
	listaTweets.appendChild(li);

	// Agregar tweets al localStorage
	agregarTweetLocal(tweet);

}

// Borrar tweets
function borrarTweet(e){

	e.preventDefault();

	if( e.target.classList.contains("borrar-tweet") ){
		e.target.parentElement.remove();
	}

	// Eliminar tweets del local storage
	borrarTweetLocal(e.target.parentElement.innerText);

}

// Agrega tweets al local Storage
function agregarTweetLocal(tweet){

	let tweets;
	tweets = obtenerTweets();

	// Agregar el nuevo tweet
	tweets.push(tweet);

	// Convertir de string a arreglo
	localStorage.setItem('tweets', JSON.stringify(tweets));

}

//Obtener tweets localStorage
function obtenerTweets(){

	let tweets;

	// Revisamos los valores del local
	if( localStorage.getItem("tweets") === null ){
		tweets = [];
	}else{
		tweets = JSON.parse(localStorage.getItem("tweets"));
	}

	return tweets;

}

// Borrar tweet del local Storage
function borrarTweetLocal(tweetToDrop){

	// Quitandole la letra "X" a la cadena
	let tweet = tweetToDrop.slice(0, -1);

	let tweets = JSON.parse(localStorage.getItem("tweets"));

	tweets.forEach( (element, key) => {
		if( element === tweet ){
			tweets.splice(key, 1);
			localStorage.setItem("tweets", JSON.stringify(tweets));
		}
	});

}

// Listar Tweets en el DOM
function listarTweets(){

	let tweets = obtenerTweets();

	// Crear elemento y agregarle el contenido
	tweets.forEach( tweet => {
		const li = document.createElement("li");
		li.innerHTML = tweet;

		// Crear boton de eliminar
		const botonBorrar = document.createElement("a");
		botonBorrar.classList.add("borrar-tweet");
		botonBorrar.innerHTML = "X";

		li.appendChild(botonBorrar);
		listaTweets.appendChild(li);
	});

}