const billAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash");  
const checkbutton = document.querySelector("#check");
const errormsg = document.querySelector("#errormessage");
const NoOfNotes = document.querySelectorAll("#no-of-notes")

const avaialablenotes = [2000,500,100,20,10,5,1];

checkbutton.addEventListener("click" , function validateamount(){
    errormsg.style.display = "none";
    if(billAmount.value <= 0){
        errormsg.style.display = "block";
        errormsg.innerText = "The bill amount should be greater than 0";
    }
    else{
        if(CashGiven.value >= billAmount.value){
            const amountTobereturned = (CashGiven.value - billAmount.value);
            calculatechange(amountTobereturned);
        }
        else{
            errormsg.style.display = "block";
            errormsg.innerText = "The cash given should be atleast equal to bill amount";
        }
    }
} );

function calculatechange(amountTobereturned){
    for(let i=0;i<avaialablenotes.length;i++){
    const numberofnotes = Math.trunc(amountTobereturned/avaialablenotes[i]);
    amountTobereturned %= avaialablenotes[i];
    NoOfNotes[i].innerText = numberofnotes;  

    }
}
