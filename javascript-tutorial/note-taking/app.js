class NoteApp {
    constructor() {
        this.notes = [];
        this.noteInput = document.getElementById('noteInput');
        this.addNoteBtn = document.getElementById('addNoteBtn');
        this.noteList = document.getElementById('noteList');
        this.addNoteBtn.addEventListener('click', () => this.addNote());
    }

    addNote() {
        const noteText = this.noteInput.value.trim();

        if (noteText !== '') {
            const noteItem = document.createElement('li');
            noteItem.classList.add('note');

            const noteContentContainer = document.createElement('div');
            const noteContent = document.createElement('p');
            noteContent.textContent = noteText;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => this.editNote(noteItem, noteContent));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => this.deleteNote(noteItem));

            // Append the note content to the container
            noteContentContainer.appendChild(noteContent);

            // Append noteContentContainer, editBtn, and deleteBtn to noteItem
            noteItem.appendChild(noteContentContainer);
            noteItem.appendChild(editBtn);
            noteItem.appendChild(deleteBtn);

            // Append noteItem to the noteList
            this.noteList.appendChild(noteItem);

            this.noteInput.value = '';
        }
    }

    editNote(noteItem, noteContent) {
        const existingText = noteContent.textContent;
        const inputElement = document.createElement('input');
        inputElement.value = existingText;
      
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', () => {
          const newText = inputElement.value.trim();
          if (newText !== '') {
            noteContent.textContent = newText;
            const index = this.notes.findIndex(note => note.element === noteItem);
            this.notes[index].text = newText;
          }
          // Remove the input and buttons after editing
          noteItem.removeChild(inputElement);
          noteItem.removeChild(saveBtn);
          noteItem.removeChild(cancelBtn);
        });
      
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', () => {
          // Remove the input and buttons without saving changes
          noteItem.removeChild(inputElement);
          noteItem.removeChild(saveBtn);
          noteItem.removeChild(cancelBtn);
        });
      
        // Clear the content of noteContent and add the input and buttons
        noteContent.innerHTML = '';
        noteItem.appendChild(inputElement);
        noteItem.appendChild(saveBtn);
        noteItem.appendChild(cancelBtn);
      
        // Set focus on the input for immediate user interaction
        inputElement.focus();
    }

    deleteNote(noteItem) {
        const index = this.notes.findIndex(note => note.element === noteItem);
        if (index !== -1) {
            this.notes.splice(index, 1);
            this.noteList.removeChild(noteItem);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NoteApp();
});
