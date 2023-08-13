/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
//  */

//  [{ text: "Note1", priority: 'sverw' }, { text1: "Note1", priority: 'sverw' } { text2: "Note1", priority: 'sverw' } { text3: "Note1", priority: 'sverw' }]
class Notes {
    static Priority() {
        return { HIGHT: "hight", LOW: "low" };
    };
    constructor() {
        this.items = [];
        
    }
    addNote(note) {
        this.items.push(note);
    };
    removeNote(text) {
        const index = this.items.findIndex(item => item.text === text);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const note1 = new Notes()
console.log(note1)

note1.addNote({ text: "Note1", priority: Notes.Priority().HIGHT });
console.log(note1)

note1.removeNote("Note1");
console.log(note1);