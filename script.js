function usuario(user) {
    const {name, button1} = user;

    if (button1 === 'plano mensal: 100 R$') {
        alert('você escolheu o plano mensal de 100 R$, ' + name + '!');
    }
}
