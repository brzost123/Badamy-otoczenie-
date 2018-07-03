
var fs = require('fs');

//Odczytaj listę plików i folderów...
fs.readdir('C:/Users/Dyrektor/Desktop/Arek-programowanie/Private/Arek/js/file system', (err, files) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null){ //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wszystko poszło ok
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {//Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. niepoprawna ścieżka
        console.log('Błąd podczas listowania katalogu!', err);
    }
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});
