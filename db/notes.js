const util = require('util');
const fs = require('fs')

const uuidv1 = require('uuid/v1')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(notes) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    findNotes(){
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err){
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }
    addNotes(notes) {
        const { title, text } = notes;
        if (!title || !text) {
            throw new Error("Must have text")
        }
        const newNotes = { title, text, id: uuidv1() };

        return this.getNotes()
            .then((notes) => [notes, newNotes])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNotes);
    }
    deleteNotes(id){
        return this.getNotes()
        .then((notes) => notes.filter((notes) => notes.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Store();