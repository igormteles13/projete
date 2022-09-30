
const firebaseConfig = {
    apiKey: "AIzaSyAVgkyhDLKZm1j2WIKHepcqHzJjsgJl1IY",
    authDomain: "projete-2a1d3.firebaseapp.com",
    databaseURL: "https://projete-2a1d3-default-rtdb.firebaseio.com",
    projectId: "projete-2a1d3",
    storageBucket: "projete-2a1d3.appspot.com",
    messagingSenderId: "599663837653",
    appId: "1:599663837653:web:d8b52a904024f0d1217d5c"
  };

firebase.initializeApp(firebaseConfig)

db = firebase.database()

var feminino = false
var masculino = false

function clicar1(){
    alert(error)
}

function Voltar(){
    window.location = "menuprincipal.html"
}
function VoltarTelaDeLogin(){
    window.location = "login.html"
}

function CadastrarDadosMedicos(){
    alergias = document.getElementById("Alergias").value
    medicamentos = document.getElementById("Medicamentos").value
    receitas = document.getElementById("Receitas").value
    prontuariosAntigos = document.getElementById("ProntuariosAntigos").value
    doencasFamiliares = document.getElementById("DoencasFamiliares").value

    nome = localStorage.getItem("nome")
    referencia = "conta/" + nome + "/hist"

    try{
        db.ref(referencia).set({
            Alergias: alergias,
            Medicamentos: medicamentos,
            Receitas: receitas,
            ProntuariosAntigos: prontuariosAntigos,
            DoencasFamiliares: doencasFamiliares
        })
        
    }
    catch(error){
        alert("Problema ao salvar")
    }
    
}
function ChamarCadastroDadosMedicos(){
    window.location = "historicomedico.html"

}
function AcessarHistoricoMedico(){
    window.location = "historicomedico2.html"
}

function CriarListaDadosPessoais(dados){
    elementonome = document.getElementById("nome")
    elementoendereco = document.getElementById("endereco")
    elementosobrenome = document.getElementById("sobrenome")
    elementotelefone = document.getElementById("telefone")
    elementotipoSanguineo = document.getElementById("tipoSanguineo")
    elementocidade = document.getElementById("cidade")
    elementoestado = document.getElementById("estado")
    elementogenero = document.getElementById("genero")

    elementonome.innerHTML = dados["nome"]
    elementoendereco.innerHTML = dados["Endereço"]
    elementosobrenome.innerHTML = dados["Sobrenome"]
    elementotelefone.innerHTML = dados["Telefone"]
    elementotipoSanguineo.innerHTML = dados["Tipo Sanguineo"]
    elementocidade.innerHTML = dados["Cidade"]
    elementogenero.innerHTML = dados["Genero"]
    elementoestado.innerHTML = dados["Estado"]

}
function CriarListaDadosMedicos(dados){
    elementoalergias = document.getElementById("alergias")
    elementomedicamentos = document.getElementById("medicamentos")
    elementoreceitas = document.getElementById("receitas")
    elementosprontuariosantigos = document.getElementById("prontuariosAntigos")
    elementodoencasfamiliares = document.getElementById("doencasFamiliares")

    elementoalergias.innerHTML = dados["Alergias"]
    elementomedicamentos.innerHTML = dados["Medicamentos"]
    elementoreceitas.innerHTML = dados["Receitas"]
    elementosprontuariosantigos.innerHTML = dados["ProntuariosAntigos"]
    elementodoencasfamiliares.innerHTML = dados["DoencasFamiliares"]
   

}

function AcessarDadosPessoais2(){
    elementoDadosPessoais = document.getElementById("divDadosPessoais")
    elementoMenu = document.getElementById("menu")
    elementoDadosMedicos = document.getElementById("divDadosMedicos")

    elementoDadosPessoais.style.display = "block"
    elementoMenu.style.display = "none"
    elementoDadosMedicos.style.display = "none"

    nome = localStorage.getItem("nome")
    referencia = "conta/" + nome + "/ddpessoais"
    console.log(referencia)
    try{
        db.ref(referencia).once("value").then(function(snapshot){
            resElement = snapshot.val()
            console.log(resElement)
            CriarListaDadosPessoais(resElement)
        })
    }
    catch{
        alert("Erro")
    }
    // window.location = "formulario2.html"
}

function AcessarHistoricoMedico(){
    elementoDadosMedicos = document.getElementById("divDadosMedicos")
    elementoMenu = document.getElementById("menu")
    elementoDadosPessoais = document.getElementById("divDadosPessoais")


    elementoDadosMedicos.style.display = "block"
    elementoMenu.style.display = "none"
    elementoDadosPessoais.style.display = "none"



    nome = localStorage.getItem("nome")
    referencia = "conta/" + nome + "/hist"
    console.log(referencia)
    try{
        db.ref(referencia).once("value").then(function(snapshot){
            resElement = snapshot.val()
            console.log(resElement)
            CriarListaDadosMedicos(resElement)
        })
    }
    catch{
        alert("Erro")
    }
    // window.location = "formulario2.html"
}

function CadastrarDadosPessoais(){
    window.location = "formulario.html"
}
function EnviarDadosMedicos(){
    // path_firebase = "conta/ca/hist"
    nome = localStorage.getItem("nome")

    path_firebase = "conta/" + nome + "/hist"

    alergias = document.getElementById("Alergias").value
    medicamentos = document.getElementById("Medicamentos").value
    receitas = document.getElementById("Receitas").value
    prontuariosAntigos = document.getElementById("ProntuariosAntigos").value
    doencasFamiliares = document.getElementById("DoencasFamiliares").value


    db.ref(path_firebase).set({
        "Alergias":  alergias,
        "Medicamentos": medicamentos,
        "Receitas": receitas,
        "Prontuarios Antigos": prontuariosAntigos,
        "Doenças Familiares": doencasFamiliares
    })

}
function Logar(){
    nome = document.getElementById("nome").value
    cpf = document.getElementById("cpf").value

    if(nome != "" && cpf != "")
    {
        localStorage.setItem("nome", nome)
        localStorage.setItem("cpf", cpf)

        window.location = "menuprincipal.html";
    }
    else{
        alert("Preencha todos os campos!")
    }
    
}
function CadastrarDadosPessoais(){

    nome = document.getElementById("Nome").value
    path_firebase = "conta/" + nome + "/ddpessoais"

    Sobrenome = document.getElementById("Sobrenome").value
    TipoSanguineo = document.getElementById("TipoSanguineo").value
    Telefone = document.getElementById("Telefone").value
    // doencasFamiliares = document.getElementById("DoencasFamiliares").value
    // console.log(document.querySelector('input[name="generoFeminino"]:checked'))
    console.log(document.getElementById("Masculino").value)
    Data = document.getElementById("Data_Nascimento")
    Cidade = document.getElementById("Cidade").value
    Estado = document.getElementById("Estado").value
    Endereco = document.getElementById("Endereco").value
    Telefone = document.getElementById("Telefone").value

    if(masculino == true){
        genero = "masculino"
    }
    else if(masculino == false){
        genero = "feminino"
    }

    db.ref(path_firebase).set({
        "nome":  nome,
        "Sobrenome": Sobrenome,
        "Tipo Sanguineo": TipoSanguineo,
        "Telefone": Telefone,
        "Data de nascimento": Data,
        "Genero": genero,
        "Cidade": Cidade,
        "Estado": Estado,
        "Endereço": Endereco,
        "Telefone": Telefone
    })
    window.location="login.html"
}

function RegistrarFeminino(){
    feminino = true;
}
function RegistrarMasculino(){
    masculino = true;
}
function Cadastro(){
    window.location = "formulario.html";
}
