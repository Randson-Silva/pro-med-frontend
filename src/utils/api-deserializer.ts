export function deserializeGender(genderParam: string) {
    if (genderParam === 'MALE') return 'Masculino';
    else if (genderParam === 'FEMALE') return 'Feminino';
    else return 'Outro';
}