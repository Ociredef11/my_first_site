function getSnowboardSize() {
    // Ottieni l'altezza dell'utente
    const height = document.getElementById('height').value;
    const resultDiv = document.getElementById('result');
    
    // Controlla se l'altezza è valida
    if (height === "" || isNaN(height)) {
        resultDiv.innerHTML = "Per favore, inserisci una altezza valida.";
        resultDiv.style.color = "red";
        return;
    }

    // Formula per calcolare la taglia della tavola
    let snowboardSize;

    if (height < 150) {
        snowboardSize = "Tavola 130-140 cm";
    } else if (height >= 150 && height <= 160) {
        snowboardSize = "Tavola 140-150 cm";
    } else if (height >= 160 && height <= 170) {
        snowboardSize = "Tavola 150-160 cm";
    } else if (height >= 170 && height <= 180) {
        snowboardSize = "Tavola 160-170 cm";
    } else if (height > 180) {
        snowboardSize = "Tavola 170-180 cm";
    }

    // Mostra il risultato
    resultDiv.innerHTML = `La tua taglia di tavola da snowboard consigliata è: ${snowboardSize}`;
    resultDiv.style.color = "blue";
}
