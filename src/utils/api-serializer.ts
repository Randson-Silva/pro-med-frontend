export function serializeBloodType(bloodType: string) {
    const type = bloodType.at(0)?.toUpperCase();
    let sufix: string;

    if (bloodType.includes('+') || bloodType.toLowerCase().includes('positivo')) {
        sufix = "_POSITIVE";
    }
    else if (bloodType.includes('-') || bloodType.toLowerCase().includes('negativo')) {
        sufix = "_NEGATIVE";
    }
    else return alert('Insira um tipo sanguíneo válido.');

    return type + sufix;
}

export function serializeGender(genderParam: string) {
    if (genderParam.toLowerCase() === 'masculino') return 'MALE';
    else if (genderParam.toLowerCase() === 'feminino') return 'FEMALE';
    else return 'OTHER';
}