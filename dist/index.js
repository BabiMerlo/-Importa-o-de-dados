"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insumoAPI_1 = require("./insumoAPI");
const cnpjs = ["45997418000153"];
insumoAPI_1.insumoAPI.displayDadosCep("29665000");
insumoAPI_1.insumoAPI.displayDadosCnpj("45997418000153");
/*
//Testando a execução síncrona, com parte do código assíncrono
console.log("1 - Instrução posicionada antes da chamada da function loginUser...");
const usuario1 = loginUser("felipe@gmail.com", "1234");
console.log(`5 - Usuário logado: ${usuario1}`);
//console.log(`6 - Nome do Usuário logado: ${usuario1.name}`); //Error: Cannot read properties of undefined (reading 'name')

function loginUser(email: string, password: string): User | undefined {
    let usuario: User | undefined;

    console.log("2 - Dentro da function loginUser.\n"+
        "Antes do bloco de setTimeout 1.0s... Simula validação de usuário por API");

    setTimeout(() => { //simulando um bloco de instruções de chamada de API externa
        const error = false;
        
        if (error) {
            console.log(new Error("Erro no login!"));
        } else {
            console.log("3 - Criando usuário dentro do setTimeout...");
            usuario = new User(email, password, "Felipe");
            usuario.addVideo(new Video("video1", "sinopse1", "genero1"));
            usuario.addVideo(new Video("video2", "sinopse2", "genero2"));
            usuario.addVideo(new Video("video3", "sinopse3", "genero3"));
            console.log(`3.1 - Objeto User construído dentro do setTimeout: ${usuario1}`);
        }
    }, 1000);
    console.log("4 - Instrução posicionada após bloco de setTimeout 1.0 segundo...");
    return usuario;
}
*/
/*
//Testando a execução assíncrona, com callbacks
//USO INCORRETO DE CALLBACKS, APENAS PARA DEMONSTRAÇÃO DE PROBLEMA DE ASSINCRONIA
console.log("1 - Instrução posicionada antes da chamada da function loginUser...");
loginUser("felipe@gmail.com", "1234", (usuario: User) : void => {
        console.log("5 - Executando a callback fncTratarUser...");
        console.log(`6 - Usuário logado: ${usuario}`);
        //console.log(`7 - Nome do Usuário logado: ${usuario.name}`); //TypeError: Cannot read properties of undefined (reading 'name')
    }
);

function loginUser(email: string, password: string, fncTratarUser:  (usuario: User) => void): User | undefined {
//function loginUser(email: string, password: string, fncTratarUser: Function): User | undefined {

    let usuario: User | undefined;

    console.log("2 - Dentro da function loginUser.\n"+
        "Antes do bloco de setTimeout 1.0s... Simula validação de usuário por API");

    setTimeout(() => {
        const error = false;
        
        if (error) {
            console.log(new Error("Erro no login!"));
        } else {
            console.log("3 - Criando usuário dentro do setTimeout...");
            usuario = new User(email, password, "Felipe");
            usuario.addVideo(new Video("video1", "sinopse1", "genero1"));
            usuario.addVideo(new Video("video2", "sinopse2", "genero2"));
            usuario.addVideo(new Video("video3", "sinopse3", "genero3"));
            console.log(`3.1 - Objeto User construído dentro do setTimeout: ${usuario}`);
        }
    }, 1000);
    console.log("4 - Instrução posicionada após bloco de setTimeout 1.0 segundo...");
    fncTratarUser(usuario as User);
    return usuario;
}
*/
/*
//Testando a execução assíncrona, com callbacks
//USO CORRETO DE CALLBACKS, PARA TRATAR O PROBLEMA DE ASSINCRONIA
console.log("1 - Instrução posicionada antes da chamada da function loginUserCallback...");

loginUserCallback(
    "felipe@gmail.com",
    "1234",
    (usuario: User) => {
        console.log("6 -Executando a callback fncOnSuccess...");
        console.log(`7 - Nome do Usuário logado: ${usuario.name}`);
    },
    (error: Error) => {
        console.log("Executando a callback fncOnError...");
        console.log(`${error.name}: ${error.message}`);
    }
);
console.log("4 -Mensagem posicionada após chamada de loginUserCallback...");
*/
/*
//Demonstrando o Callback Hell - execução assíncrona, com Callbacks
console.log("1 - Instrução posicionada antes da chamada da function loginUserCallback...");
loginUserCallback(
    "felipe@gmail.com",
    "1234",
    (usuario: User) => {
        console.log("5 -Executando a callback fncOnSuccess...");
        console.log(`6 - Nome do Usuário logado: ${usuario.name}`);
        getUserVideosCallback(usuario,
            (listaVideos: Array<Video>) => {
                console.log("\nExecutando a callback fncTratarLstVideos...");
                console.log("Mostrando Lista de Vídeos do Usuário:\n" + listaVideos);
            getVideoDetailsCallback(listaVideos[0],
                (video: Video) => {
                    console.log("\nExecutando a callback fncTratarVideo...");
                    console.log("Mostrando Detalhes do Vídeo:\n" + video.toString());
                }
            );
            }
        );
    },
    (error: Error) => {
        console.log("Executando a callback fncOnError...");
        console.log(`${error.name}: ${error.message}`);
    }
);
console.log("\nCallback Hell!!!\nMensagem posicionada após chamada de loginUserCallback...");
*/
/*
//Testando a execução assíncrona, com Promises
loginUserPromise("felipe@gmail.com", "1234")
    .then((usuario: User) => {
        console.log("\nExecutando o resolve de loginUserPromise...");
        console.log(`Nome do Usuário logado: ${usuario.name}`);
        return getUserVideosPromise(usuario);
    }) .then((listaVideos: Array<Video>) => {
        console.log("\nExecutando o resolve de getUserVideosPromise...");
        console.log("Mostrando Lista de Vídeos do Usuário:\n" + listaVideos);
        return getVideoDetailsPromise(listaVideos[0]);
    }) .then((video: Video) => {
        console.log("\nExecutando o resolve de getVideoDetailsPromise...");
        console.log("Mostrando Detalhes do Vídeo:\n" + video.toString());
    })
    .catch((error: Error) => {
        console.log("\nExecutando o reject de alguma Promise...");
        console.log(`${error.name}: ${error.message}`);
    })
console.log("\nMensagem posicionada depois de chamada de loginUserPromise...");
*/
//Testando a execução assíncrona, com async/await
/*async function displayUser(): Promise<void> {
   /*
    try {
        const usuario: User = await loginUserPromise("felipe@gmail.com", "1234");
        console.log(`Nome do Usuário logado: ${usuario.name}`);
        const listaVideos: Array<Video> = await getUserVideosPromise(usuario);
        console.log("Mostrando Lista de Vídeos do Usuário:\n" + listaVideos);
        const video: Video = await getVideoDetailsPromise(listaVideos[0]);
        console.log("Mostrando Detalhes do Vídeo:\n" + video.toString());
    } catch (error: any) {
        console.log(`${error.name}: ${error.message}`);
    }
    
    //Código equivalente ao mostrado acima, mas usando then/catch para tratar cada Promise separadamente
    // e tratar cada erro de forma diferenciada.
    await (loginUserPromise("felipe@gmail.com", "1234")
        //Caso bem sucedido loginUserPromise, o retorno será um User
        .then((usuarioFromResolve: User) => {
            console.log(`Nome do Usuário logado: ${usuarioFromResolve.name}`);

            getUserVideosPromise(usuarioFromResolve)
                //Caso bem sucedido getUserVideosPromise, o retorno é uma Array<Video>
                .then((listaVideosFromResolve: Array<Video>) => {
                    console.log("Mostrando Lista de Vídeos do Usuário:\n" + listaVideosFromResolve);

                    getVideoDetailsPromise(listaVideosFromResolve[0])
                        //Caso bem sucedido getVideoDetailsPromise, o retorno é um Video
                        .then((videoFromResolve: Video) => {
                            console.log("Mostrando Detalhes do Vídeo Favorito:\n" + videoFromResolve.toString());
                        })
                        //Caso rejeitado getVideoDetailsPromise, o retorno é um Error
                        .catch((errorFromRejectDetails: Error) => {
                            console.log(`Erro Vídeo Details\n${errorFromRejectDetails.name}: ${errorFromRejectDetails.message}`);
                        })
                })
                //Caso rejeitado getUserVideosPromise, o retorno é um Error
                .catch((errorFromRejectVideos: Error) => {
                    console.log(`Erro Lista Vídeos\n${errorFromRejectVideos.name}: ${errorFromRejectVideos.message}`);
                })
        })
    
        //Caso rejeitado loginUserPromise, o retorno é um Error
        .catch((errorFromRejectLogin: Error) => {
            console.log(`Erro Login\n${errorFromRejectLogin.name}: ${errorFromRejectLogin.message}`);
        })
    );

}

displayUser();
console.log("\nMensagem posicionada depois de chamada de displayUser.");

*/
//Testando a execução assíncrona, com async/await usando APIs para consultar dados de CEP 
//# sourceMappingURL=index.js.map