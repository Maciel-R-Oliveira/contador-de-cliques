
        // Area de variaveis

        let contador = document.querySelector(".contador")
        let limpador = document.querySelector(".limpador")
        let tempo = document.querySelector(".tempo")
        let tela = document.querySelector(".tela")
        let fundo = document.body
        let tempoacabou = false
        let sg;
        contador.addEventListener("click", contar)
        limpador.addEventListener("click", limpar)
        // ---------------------------------------

        // Funcao contar: serve para armazenar os cliques
        function contar(){
            if(tempoacabou){
                return
            }
            if(tela.innerHTML == "Clique para começar..."){
                tela.innerHTML = 1
                sg = setInterval(t, 1000)
            } else{
                tela.innerHTML = Number(tela.innerHTML) + 1
            }
        }
        // ------------------------------------------------

        // Funcao tempo: serve para contar o tempo e quando parar a funcao acimna
        function t() {
        if (Number(tempo.innerHTML) > 0) {
            tempo.innerHTML = Number(tempo.innerHTML) - 1;
            if(tempo.innerHTML == 0 ){
                tempo.innerHTML = "00"
            }
        
        } else {
            clearInterval(sg);
            tempoacabou = true;
        }
        tempo.innerHTML = tempo.innerHTML >= 1 ? "0" + tempo.innerHTML : tempo.innerHTML;
        }
        // --------------------------------------------------
       
        // Funcao limpar: reestabelece os valores padroes
        function limpar(){
            tela.innerHTML = "Clique para começar..."
            tempo.innerHTML = 10
            tempoacabou = false
            clearInterval(sg)
        }

        
            