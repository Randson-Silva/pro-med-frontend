export function calculateAge(birthDate: string) {
    const [day, month, year] = birthDate.split('/') as string[];
    const birthdate = new Date(Number(year), Number(month) - 1, Number(day));

    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}