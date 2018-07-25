var login = prompt('Кто пришел?', '');

if (login === 'admin'){
    var pass = prompt('Ваш пароль?', '');

    if (pass === 'yellow'){
        alert('Добро пожаловать!');
    }else if (pass === null){
        alert('Вход отменён!');
    }else{
        alert('Неверный пароль!');
    }
}else if (login === null){
    alert('Вход отменён!');
}else{
    alert('Я вас не знаю!');
}