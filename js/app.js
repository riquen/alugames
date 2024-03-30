function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagemJogo = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');
    
    if (imagemJogo.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}