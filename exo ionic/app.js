// function onClick() {

//  document.getElementById("ajouter").value;

//  document.getElementById("input-reason").innerHTML = document.getElementById("total-expenses").value;

// }

// ajouter.addEventListener("click", onClick);



const reasonInput = document.getElementById("input-reason");
const amountInput = document.getElementById("input-amount");
const btnCancel = document.getElementById("btn-cancel");
const btnAdd = document.getElementById("btn-add");

const expensesList = document.getElementById("expenses-list");

const totalExpenses = document.getElementById("total-expenses");

let totalAmountExpenses = 0;

const alert = document.createElement('ion-alert');


function clear() {
    reasonInput.value = "";
    amountInput.value = "";
}

// Je capte l'événement click sur le boutton d'ajout
btnAdd.addEventListener("click", function () {

     //Je récupère les valeurs de mes champs
     const enteredReason = reasonInput.value;
     const enteredAmount = amountInput.value;
 

    // Afficher une popup d'erreur si les infos entrées dans les inputs sont éronées
    // trim() vérifie si il y a un caractère vide ou pas
    if (enteredReason.trim().length <= 0 || enteredAmount.trim().length <= 0 || enteredAmount <= 0) {

        alert.header = 'Alert';
        alert.message = 'Veuillez renseigner une dépense et un montant valide.';
        alert.buttons = ['OK'];

        // Ajouter un élément HTML enfant dans le parent 
        document.body.appendChild(alert);
        return alert.present();
    }


    // Je veux ajouter un ion-item à ma liste
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": $" + enteredAmount;
    expensesList.appendChild(newItem);

    // J'incrémente au montant total le montant que je viens de rentrer en ajoutant la dépense à la liste
    totalAmountExpenses += +enteredAmount;
    totalExpenses.textContent = totalAmountExpenses;

    clear();

});

// Je capte l'événement click sur le boutton de suppression
btnCancel.addEventListener("click", function () {
    clear();
});
