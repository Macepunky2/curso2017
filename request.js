var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users",
true);
xhr.onload = function (e) {
 if (xhr.readyState === 4) {
 if (xhr.status === 200) {
 console.log(xhr.responseText);
 var obj = JSON.parse(xhr.responseText);
 alert(JSON.stringify(obj[0]));
 console.log(obj);
 } else {
 console.error(xhr.statusText);
 }
 }
};

xhr.onerror = function (e) {
 console.error(xhr.statusText);
};

xhr.send(null);