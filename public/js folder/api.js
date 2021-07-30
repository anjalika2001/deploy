// Using XMLHttRequest Class to open the json file

var request = new XMLHttpRequest();

// Open the Json file using get method 
request.open ('GET','scp.json', true);
request.onload = function(){

}
request.send();

// reference to our root div 
const rootDiv = document.getElementById('root');

//parse and access the JSON data 
var data = JSON.parse(this.Response);

// if request and JSON parsing successfull
// create an array and display data with JS generated HTML

if (request.status >=200 && request.status <400 )
{

// loop thru every element in data (as array ) and then display vis JS generated HTML
data.forEach(element => {

// Displaying JSON content within HTML elements 

const scpItem = document.createElement('h2')
scpItem.textContent = scp.item;

const scpClass = document.createElement('h3')
scpClass.textContent = scpClass;

const desc = document.createElement('h4')
desc.textContent = "Description of SCP";

const scpdesc = document.createElement('p')
scpdesc.textContent = scpdesc;

const containment  = document.createElement('h4')
containment.textContent = "containment";

const scpcontainment  = document.createElement('p')
scpcontainment.textContent = scpcontainment;

// append all above HTML content to the root div
rootDiv.appendChild(scpItem);
rootDiv.appendChild(scpClass);
rootDiv.appendChild(desc);
rootDiv.appendChild(scpdesc);
rootDiv.appendChild(containment);
rootDiv.appendChild(scpcontainment);
});
}

else 

    const errorMessage = document.createElement('div')
    errorMessage.setAttribute('class','alert alert-danger');
    errorMessage.textContent='Data did not load ';
    rootDiv.appendChild(errorMessage);





