
    function passvalue() {
        var animal1 = document.getElementById('animal1').value;
        localStorage.setItem('txt1',animal1);

        var animal2 = document.getElementById('animal2').value;
        localStorage.setItem('txt2',animal2);

        var animal3 = document.getElementById('animal3').value;
        localStorage.setItem('txt3',animal3);

         var Adjective = document.getElementById('Adjective').value;
        localStorage.setItem('txt4',Adjective);

         var verb = document.getElementById('verb').value;
        localStorage.setItem('txt5',verb);

         var number = document.getElementById('number').value;
        localStorage.setItem('txt6',number);

         var speed = document.getElementById('speed').value;
        localStorage.setItem('txt7',speed);

        
         var Quote = document.getElementById('Quote').value;
        localStorage.setItem('txt8',Quote);

        var result =document.getElementById('result').value;
        localStorage.setItem('txt9',result);
         
    }

function myFunction(browser) {
 localStorage.setItem('myFunction',browser);
}