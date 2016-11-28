artyom.initialize({
    lang:"es-CO", // GreatBritain english
    continuous:true, // Listen forever
    soundex:true,// Use the soundex algorithm to increase accuracy
    debug:true, // Show messages in the console
    listen:true // Start to listen commands !
    
});
    

artyom.on(['Iniciar *'] , true).then(function(i,wildcard){
    artyom.say("Tu has dicho : " + wildcard);
});
