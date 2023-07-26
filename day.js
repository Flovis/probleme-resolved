function getDateForDayOfWeek(dayOfWeek) {
  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const targetDayOfWeek = days.indexOf(dayOfWeek.toLowerCase());

  if (targetDayOfWeek === -1) {
    return 'Jour de la semaine invalide';
  }

  let daysToAdd = targetDayOfWeek - currentDayOfWeek;
  if (daysToAdd <= 0) {
    daysToAdd += 7;
  }

  if (daysToAdd === 0) {
    // Si le jour de la semaine demandé est aujourd'hui, retourner la date d'aujourd'hui
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
  }

  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + daysToAdd);
  
  // Formater la date au format 'YYYY-MM-DD'
  const formattedDate = targetDate.toISOString().split('T')[0];
  return formattedDate;
}

// Exemple d'utilisation pour un jeudi (aujourd'hui étant jeudi) :
console.log(getDateForDayOfWeek('jeudi')); // Renvoie la date d'aujourd'hui
