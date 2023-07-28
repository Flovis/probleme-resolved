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

    //le chiffre qui correspond au jour d'aujourd'hui
    const currentDayOfWeek = today.getDay();

    //le chiffre qui correspond avec le jour passe en param
    const targetDayOfWeek = days.indexOf(dayOfWeek.toLowerCase());

    if (targetDayOfWeek === -1) {
        return "Jour de la semaine invalide";
    }

    /*
        on fait la difference entre
        le nombre qui correspond au jour en param
        et le nombre qui correspond a aujourd'ui
    */
    let daysToAdd = targetDayOfWeek - currentDayOfWeek;

    if (daysToAdd < 0) {
        daysToAdd += 7;
        console.log("< 0");
        console.log(daysToAdd);
    }

    if (daysToAdd === 0) {
        /*
            Si le jour de la semaine demandé est aujourd'hui, 
            retourner la date d'aujourd'hui
        */
        const formattedDate = today.toISOString().split("T")[0];
        console.log(formattedDate);
        return formattedDate;
    }

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);

    // Formater la date au format 'YYYY-MM-DD'
    const formattedDate = targetDate.toISOString().split("T")[0];
    return formattedDate;
}
console.log(getDateForDayOfWeek("vendredi"));
// getDateForDayOfWeek("vendredi");
