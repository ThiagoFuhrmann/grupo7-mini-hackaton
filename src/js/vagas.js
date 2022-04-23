fetch('http://api-google-search.vercel.app/').then(function (response) { //servidor backend criado usando serpapi google jobs feito o deploy no site da vercel.
    return response.json();
}).then(function (data) {
    let titulos = data['jobs_results'];
    for (let i = 0; i < 9; i++) { //esse for é para ficar com 9
        populateContent(titulos[i]);
        }
    // for (const titulo of titulos) { // esse é pra pegar todos da pagina
    //     populateContent(titulo);

    // }

}).catch(function (err) {
    console.warn('Alguma coisa deu errado.', err);
});


function populateContent(obj) {
    const div = document.querySelector('.vagas');
    const myH1 = document.createElement('h1');
    const myPara = document.createElement('p');
    const divVaga = document.createElement('div');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const description = obj['description']
    const descriptionReduzido = description.substr(0, 200);
    divVaga.classList.add("vagas-box")

    myH1.textContent = obj['title'];
    myPara.textContent = `Empresa: ${obj['company_name']}`;
    myPara1.textContent = `${obj['via']}.   Lugar: ${obj['location']}`;
    myPara2.textContent = `Descrição: ${descriptionReduzido} ...`;
    
    
    
    divVaga.appendChild(myH1);
    divVaga.appendChild(myPara);
    divVaga.appendChild(myPara1);
    divVaga.appendChild(myPara2);
    

    div.appendChild(divVaga);
}