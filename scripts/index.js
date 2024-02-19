const allBtn = document.getElementsByClassName('add-btn') ;

let seat = 0 ;

for (const btn of allBtn) {
    btn.addEventListener("click", function(e) {
        seat += 1;
    setBackgroundColor(e.target.id, '#1DD100')


// select ticket seat 
        const selectedSeat = e.target.innerText
        const selectedSeatContainer = document.getElementById('selected-seat-container')

        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = selectedSeat ;
        td.style.paddingLeft = '60px'
        tr.appendChild(td);

        const  tdClass = document.createElement("td") ;
         tdClass.innerText = 'Economy' ;
         tdClass.style.paddingLeft = '125px' ;
        tr.appendChild( tdClass);
        
        const tdPrice = document.createElement("td") ;
        tdPrice.innerText = '550' ;
        tdPrice.style.paddingLeft = '85px' ;
        tr.appendChild(tdPrice);
        
        selectedSeatContainer.appendChild(tr);

        // total price 
        const totalPrice = document.getElementById('total-price') ;
        const totalPriceText = totalPrice.innerText ;
        const convertedTotalPrice = parseInt(totalPriceText);
        const sum = convertedTotalPrice + parseInt(tdPrice.innerText);

        const grandtotalPrice = document.getElementById('grand-total-price') ;
        const grandtotalPriceText = grandtotalPrice.innerText ;
        const convertedGrandTotalPrice = parseInt(grandtotalPriceText);
        const sum2 = convertedGrandTotalPrice + parseInt(tdPrice.innerText);
        
        setInnerText('total-price', sum);
        setInnerText('grand-total-price', sum2);
        setInnerText('seat-count', seat);


//         // seat less 
// const seatLess = document.getElementById('seat-less') ;
// const seatLessText = seatLess.innerText ;
// const convertedSeatLess = parseInt(seatLessText) ;
// document.getElementById('seat-less').i = convertedSeatLess - 1 ; 




    }) ;
}



function setBackgroundColor(btnId, value) {
    const btn = document.getElementById(btnId) ;
    if (btn) {
        btn.style.backgroundColor = value ;
    }
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value ;
}