function getDateForDayOfWeek(dayOfWeek) {
    const days = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
    ];
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    console.log(currentDayOfWeek);
    const targetDayOfWeek = days.indexOf(dayOfWeek.toLowerCase());
    console.log(targetDayOfWeek)

    if (targetDayOfWeek === -1) {
        return "Jour de la semaine invalide";
    }

    let daysToAdd = targetDayOfWeek - currentDayOfWeek;
    if (daysToAdd <= 0) {
        daysToAdd += 7;
    }

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);

    // Formater la date au format 'YYYY-MM-DD'
    const formattedDate = targetDate.toISOString().split("T")[0];
    return formattedDate;
}

// Exemples d'utilisation :
console.log(getDateForDayOfWeek("vendredi"));
console.log(getDateForDayOfWeek("lundi"));
console.log(getDateForDayOfWeek("samedi"));
console.log(getDateForDayOfWeek("jeudi"));
console.log(getDateForDayOfWeek("mercredi"));
