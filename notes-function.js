'use strict'

// Read current notes from localstorage 
const getSavedNotes = () => {
const notesJSON = localStorage.getItem('notes')
    try { return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e){
        return []
    }
   
}

// Save the notes to localStorage 
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove fundtion 

const removeNote= (id)=> {

    const noteIndex = notes.findIndex(function (note){
        return note.id = id 
    })
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Create the DOM structure for a note
const generateNoteDOM = (note)=>{
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    
    // setup the note title text 
    if (note.title.length  > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    //set up the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    // set up the status
    statusEl.textContent = generateLastEdited(note.updatedAt)
   statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    return noteEl
}

// sort by three ways

const sortNotes = (notes, sortBy)=> {
    if (sortBy === 'byEdited'){
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1
            } else {
                return 0
            }
        })
    } else if(sortBy === 'byCreated'){
        return notes.sort( (a,b)=> {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy ===alphabetical) {
        notes.sort((a,b) =>{
            if(a.title.toLowerCase()< b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase()> b.title.toLowerCase()){
                return 1
            }
        })
    } else 
        {

        return notes
    }

}
// Render application notes 
const renderNotes = (notes, filters)=> {
    const noteEl1 = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    noteEl1.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
             noteEl1.appendChild(noteEl)
         })

    } else {

        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = "No notes to show"
        emptyMessage.classList.add('empty-message')
        noteEl1.appendChild(emptyMessage)
        
    }
    
  
}


// generate the last edited messgae 

const generateLastEdited = (timestamp) =>{
    return `Last edited ${moment(notes.updatedAt).fromNow()}`
}