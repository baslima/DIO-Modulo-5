let rankeamento = nivelRank(250,130)

function nivelRank (vitorias, derrotas){
    let rank = vitorias - derrotas 
    return rank
}

if(rankeamento <= 10 ){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Ferro")
}else if(rankeamento >= 11 && rankeamento <= 20){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Bronze")
}else if(rankeamento >= 21 && rankeamento <= 50){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Prata")
}else if(rankeamento >= 51 && rankeamento <= 80){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Ouro")
}else if(rankeamento >= 81 && rankeamento <= 90){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Diamante")
}else if(rankeamento >= 91 && rankeamento <= 100){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Lendário")
}else if(rankeamento >= 101){
    console.log("Você possui um saldo de " + rankeamento + " vitórias" + " e está no Nível Radiante")
} 