function printSplit()
{
        let needsAmt;
        let wantsAmt;
        let savingsAmt;
        let income= document.getElementById("income").value;
        const needs= document.getElementById("needs");
        const wants= document.getElementById("wants");
        const savings= document.getElementById("savings");
        
        let rupee = new Intl.NumberFormat('en-IN', {
               currency: 'INR',
            });

        
        if(document.getElementById("fifty").checked==true){
                       needs.innerText="₹ "+rupee.format(income / 2);
                       wants.innerText="₹ "+rupee.format(income * .3);
                       savings.innerText="₹ "+rupee.format(income * .2);

        }
        else if(document.getElementById("sixty").checked==true){
                        needs.innerText="₹ "+rupee.format(income * .6);
                        wants.innerText="₹ "+rupee.format(income * .2);
                        savings.innerText="₹ "+rupee.format(income * .2);

        }
        else if(document.getElementById("seventy").checked==true){
                        needs.innerText="₹ "+rupee.format(income * .7);
                        wants.innerText="₹ "+rupee.format(income * .2);
                        savings.innerText="₹ "+rupee.format(income * .1);

        }
        

}