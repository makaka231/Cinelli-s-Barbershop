document.getElementById("formPrenotazione").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const orario = document.getElementById("orario").value;
  const servizio = document.getElementById("servizio").value;
  const email = prompt("Inserisci la tua email per conferma (facoltativa):");

  const dati = {
    nome: nome,
    orario: orario,
    servizio: servizio,
    email: email || ""
  };

  fetch("https://script.google.com/macros/s/AKfycbyhBjqHdVLIlVefhlt-97zwCc8PXd6n1do14FI5Z3_Nx7au3chmQYJl9Pgp2hrmdHqf/exec", {
    method: "POST",
    body: JSON.stringify(dati),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.text())
  .then(risposta => {
    const output = document.getElementById("risposta");
    if (risposta === "OK") {
      output.textContent = "✅ Prenotazione inviata con successo!";
    } else {
      output.textContent = "⚠️ " + risposta;
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("risposta").textContent = "Errore durante l'invio.";
  });
});
