document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("board")[0].onclick = onDeskClick;
    document.getElementsByTagName("html").onclick = onRandomClick;
    });
    
    function onDeskClick(e) {
        if (e.target.localName === "img")
            onCardClick(e.target.parentElement.parentElement);
    }
    
    function onCardClick(element) {
    
        element.classList.toggle("active");
    
        let lastId = "";
        let isSame = true;
        let activeCard = document.querySelectorAll(".active");
        for (let i = 0; i < activeCard.length; i++) {
            let card = activeCard[i];
            let cardId = card.dataset.cardtype;
            if (lastId === "") {
                lastId = cardId;
            }
            else if (cardId !== lastId) { isSame = false; break;}
        }    }