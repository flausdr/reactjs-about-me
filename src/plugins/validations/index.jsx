const ValidateInputName = (input) => {
    if (!input.value) {
        alert('Required, enter your name!');
        return false;
    } else if (/[^a-zA-Z ]/gi.test(input.value)){
        alert('Error in your name');
        return false;
    }
    return true;
}

const ValidateInputPhone = (input) => {
    if (!input.value) {
        alert('Required, enter your phone!');
        return false;
    } else if (/[^0-9+]/g.test(input.value)){
        alert('Error in your number')
        return false;
    }
    return true;
}

export { ValidateInputName, ValidateInputPhone };