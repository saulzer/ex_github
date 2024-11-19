// // const responses = ["c", "a", "b", "a", "c"];
// // const emojis = ["✔️", "✨", "👀", "😭", "👎"];

// // Fonction pour valider les réponses et colorier les bonnes et mauvaises réponses
// function validerReponses() {
//   // Bonnes réponses
//   const bonnesReponses = {
//     empereur: "napoleon",
//     independance: "4 juillet 1776",
//     empire: "476 ap J-C",
//     slovenie: "Ljubljana",
//     irlande: "4,9 Millions",
//   };

//   // On parcourt chaque question
//   for (let question in bonnesReponses) {
//     // On récupère l'élément radio sélectionné pour cette question
//     let selectedOption = document.querySelector(
//       `input[name="${question}"]:checked`
//     );

//     // Si l'utilisateur n'a pas sélectionné de réponse pour cette question
//     if (!selectedOption) {
//       alert(`Vous n'avez pas répondu à la question : "${question}"`);
//       return;
//     }

//     // On récupère la bonne réponse
//     let bonneReponse = bonnesReponses[question];

//     // On va maintenant comparer la réponse sélectionnée à la bonne réponse
//     let labels = document.querySelectorAll(`input[name="${question}"] + label`);

//     // Parcourir tous les labels pour cette question
//     labels.forEach((label, index) => {
//       // Si la valeur de la réponse est correcte
//       if (
//         selectedOption.value === bonneReponse &&
//         selectedOption.value === label.innerText.trim()
//       ) {
//         label.style.color = "green"; // Bonne réponse en vert
//       } else {
//         label.style.color = "red"; // Mauvaise réponse en rouge
//       }
//     });
//   }
// }

function validerReponses() {
  // Bonnes réponses pour chaque question
  const bonnesReponses = {
    empereur: "napoleon",
    independance: "4 juillet 1776",
    empire: "476 ap J-C",
    slovenie: "Ljubljana",
    irlande: "4,9 Millions",
  };

  // On parcourt chaque question
  for (let question in bonnesReponses) {
    // On récupère la réponse sélectionnée pour cette question
    const selectedOption = document.querySelector(
      `input[name="${question}"]:checked`
    );
    // document.querySelector : Cela permet de sélectionner un élément dans le DOM

    // input[name="${question}"]:checked : Cela sélectionne l'élément <input> qui est de type "radio" et qui appartient à la question en cours (c'est-à-dire celui qui a le même nom que la clé question), et qui est coché (:checked).

    // Par exemple, si la question est "empereur" et que l'utilisateur a sélectionné "Napoléon", cela va récupérer l'élément <input> de type radio pour la question "empereur" qui est sélectionné (coché).

    const emojis = {
      correct: "✔️", // Emoji pour bonne réponse
      incorrect: "❌", // Emoji pour mauvaise réponse
    };

    if (!selectedOption) {
      alert(`Vous n'avez pas répondu à la question : "${question}"`);
      return;
    }
    // On vérifie si l'utilisateur a réellement sélectionné une réponse pour cette question.

    // Si aucune option n'a été sélectionnée (c'est-à-dire selectedOption est null), on affiche un message d'alerte pour dire à l'utilisateur qu'il doit répondre à cette question, puis on arrête la fonction (return).

    // Exemple : Si l'utilisateur n'a pas cliqué sur de bouton radio pour la question "empereur", il verra une alerte
    const isCorrect = selectedOption.value === bonnesReponses[question];

    // On compare la valeur de la réponse sélectionnée par l'utilisateur (selectedOption.value) avec la bonne réponse associée à cette question (bonnesReponses[question]).

    const labels = document.querySelectorAll(
      `label[for="${selectedOption.id}"]`
    );
    // Une fois qu'on sait quelle option a été sélectionnée, on veut trouver le label qui est lié à cette option.
    // label[for="${selectedOption.id}"] : Ce sélecteur CSS sélectionne l'élément <label> qui est associé à l'option sélectionnée. L'attribut for du <label> est égal à l'id de l'élément <input> sélectionné.
    // Exemple : Si l'option sélectionnée a id="napoleon", alors cette ligne va sélectionner le <label> qui a for="napoleon".

    // On parcourt chaque label pour colorier les réponses
    labels.forEach((label) => {
      if (isCorrect) {
        label.style.color = "green"; // Bonne réponse en vert
        label.innerHTML += ` ${emojis.correct}`;
      } else {
        label.style.color = "red"; // Mauvaise réponse en rouge
        label.innerHTML += ` ${emojis.incorrect}`;
      }
    });
  }
}

// utiliser trim pour les espaces
