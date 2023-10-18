// Assure que le DOM est entièrement chargé avant d'exécuter le script
$(document).ready(function() {
    // Génère un nombre aléatoire entre 0 et 100 inclus
    let randomNumber = Math.floor(Math.random() * 101);

    // Événement lorsque le formulaire est soumis
    $("#guessForm").submit(function(event) {
        // Prévient le comportement par défaut du formulaire (actualisation de la page)
        event.preventDefault();
        
        // Récupère la valeur saisie par l'utilisateur et la convertit en nombre entier
        let userNumber = parseInt($("#userGuess").val());

        // Vérifications pour s'assurer que la valeur est valide
        if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
            alert("Veuillez entrer un nombre valide entre 0 et 100.");
        } else if (userNumber === randomNumber) {
            alert("Félicitations! Vous avez trouvé le bon nombre!");
        } else if (userNumber < randomNumber) {
            alert("Le nombre est plus grand!");
        } else {
            alert("Le nombre est plus petit!");
        }
    });
});
