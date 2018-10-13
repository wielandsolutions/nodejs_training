

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions ={
  describe: 'title of note',
  demand: true,
  alias: 't'
};
const bodyOptions ={
  describe: 'body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
.command('add','Add a new Note',{
title: titleOptions,
body: bodyOptions
})
.command('list','list of notes')
.command('read','Read the notes',{
  title:titleOptions,
  })

  .command('Remove','Remove a Note',{
  title:titleOptions
})
.help()
.argv;
var command = argv._[0];


if (command === 'add') {
 var note = notes.addNote(argv.title, argv.body);
if (note){
  console.log('Note created');
  notes.logNote(note);
}else{
  console.log('Title is already taken');
}
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing list ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note=notes.getNote(argv.title);
  if (note){
    console.log('here is your Note ');
    notes.logNote(note);
  
  }else{
    console.log('Note Not Found');
  }
} else if (command === 'remove') {
 var noteRemoved = notes.removeNote(argv.title);
var message = noteRemoved ? 'note is removed' : 'note not found';
console.log(message);
} else {
  console.log('Command not recognized');
}
