document.addEventListener("DOMContentLoaded", function () {

    var openRequest = indexedDB.open("noteDB", 2);

    openRequest.onupgradeneeded = function (e) {
        console.log("running onupgradeneeded");
        var thisDB = e.target.result;

        if (!thisDB.objectStoreNames.contains("notesOS")) {
            thisDB.createObjectStore("notesOS", { keyPath: "id" });
        }

    }

    openRequest.onsuccess = function (e) {
        console.log("Success!");
        db = e.target.result;

        $('body').on('blur', 'textarea', addNote);
        getAllNotes();

        $('body').on('click', '.delete', deleteNote);

    }

    openRequest.onerror = function (e) {
        console.log("Error");
        console.dir(e);
    }


}, false);

function addNote(e) {

    var transaction = db.transaction(["notesOS"], "readwrite");
    var store = transaction.objectStore("notesOS");

    var source = $(e.target);
    var text = source.val();
    var note = $(e.target).parent().parent();
    var id = note.attr('id');
    var x = note.position().left;
    var y = note.position().top;

    var db_note = {
        id : id,
        x: x,
        y: y,
        text : text
    }

    //Perform the add
    var request = store.put(db_note);

    request.onerror = function (e) {
        console.log("Error", e.target.error.name);
        //some type of error handler
    }

    request.onsuccess = function (e) {
       // console.log("Woot! Did it");
    }
}

function deleteNote(e)
{            
    var note = $(e.target).parent().parent();
    var transaction = db.transaction(["notesOS"], "readwrite");
    var store = transaction.objectStore("notesOS");

    note.remove();
    var request = store.delete(note.attr('id'));


    request.onerror = function (e) {
        console.log("Error", e.target.error.name);
        //some type of error handler
    }

    request.onsuccess = function (e) {
        // console.log("Woot! Did it");
    }
}

function getAllNotes()
{
    var transaction = db.transaction(["notesOS"], "readonly");
    var objectStore = transaction.objectStore("notesOS");

    var cursor = objectStore.openCursor();

    cursor.onsuccess = function (e) {
        var res = e.target.result;
        if (res) {
            renderNote(res.value)
            res.continue();
        }
    }
}
