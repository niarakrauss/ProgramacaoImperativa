function microondas (alimento, tempo){

    let tempoPipoca = 10
    let tempoMacarrao = 8
    let tempoCarne = 15
    let tempoFeijao = 15
    let tempoBrigadeiro = 8

    if (alimento == "pipoca"){
        
        if(tempo >= tempoPipoca*3){
            console.log("KABUM!!")
        } else if (tempo >= tempoPipoca*2) {
            console.log("Queimou")
        } else if(tempo < tempoPipoca){
            console.log("Tempo Insuficiente")
        } else {
            console.log("Prato pronto, bom apetite!")
        }

    } else if (alimento == "macarrao"){
            if (tempo > tempoMacarrao*3){
                console.log("KABUM!!");
            } else if (tempo > tempoMacarrao*2){
                console.log("Queimou!");
            } else if (tempo < tempoMacarrao){
                console.log("Tempo Insuficiente!");
            } else {
                console.log("Prato pronto, bom apetite!");
            }

    } else if (alimento == "carne"){
             if (tempo > tempoCarne*3){
            console.log("KABUM!!");
             } else if (tempo > tempoCarne*2){
            console.log("Queimou!");
             } else if (tempo < tempoCarne){
            console.log("Tempo Insuficiente");
            } else {
            console.log("Prato pronto, bom apetite");
             }

        
    } else if (alimento == "feijao"){
            if (tempo > tempoFeijao*3){
                console.log("KABUM!!");
            }else if (tempo > tempoFeijao*2){
                console.log("Queimou!");
            }else if (tempo < tempoFeijao){
                console.log("Tempo insuficiente");
            }else{
                console.log("Prato pronto, bom apetite");
            }
        
    } else if (alimento == "brigadeiro"){
            if (tempo > tempoBrigadeiro*3){
                console.log("KABUM!!");
            }else if (tempo > tempoBrigadeiro*2){
                console.log("Queimou!");
            }else if (tempo < tempoBrigadeiro){
                console.log("Tempo insuficiente!");
            }else{
                console.log("Prato pronto, bom apetite!");
            }
        
    } else{
        console.log("Prato Inexistente")
    }
}

microondas("pipoca", 5)
microondas("brigadeiro", 8)
microondas("macarrao")