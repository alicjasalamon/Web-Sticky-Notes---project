function Note(style) 
{
    this.id = now();
    this.style = style; //take current style from body class
    this.text = "";
    this.positionX = 1;
    this.positionY = 1;
}


//////////////////////////////////////////////
//                 CRUD                     //    
//////////////////////////////////////////////
Note.prototype.create = function () {
    //po kliknieciu na board:
    //stworz notatke i ustaw jej styl
    //dodaj do bazy
}

Note.prototype.upadate = function () {
    //kiedy skonczymy zmieniac text:
    //edytuj w bazie
}

Note.prototype.delete = function () {
    //kiedy klikniemy na krzyzyk:
    //usuwamy notatke
    //usuwamy z bazy
}

Note.prototype.renderFromDB = function (){
    //jak odswiezamy stronke to ladujamy z bazy
}
