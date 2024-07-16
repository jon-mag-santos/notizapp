function getNote(note, index){
    return `<div class='note'> 
            <h3>${noteTitles[index]}</h3> 
            ${note}
            <div class='btnDiv'> 
                <button class='btnDelete' onclick="deleteNote(${index})">X</button> 
                <button class='btnArchive' onclick="archiveNote(${index})">A</button>
            </div>
            </div>`;
}

function getArchivNote(note, index){
    return `<div class='note'> 
            <h3>${archivNoteTitles[index]}</h3> 
            ${note}
            <div class='btnDiv'> 
                <button class='btnDelete' onclick="deleteArchivNote(${index})">X</button> 
                <button class='btnNote' onclick="returnNote(${index})">N</button>
            </div>
            </div>`;
}

function getTrashNote(note, index){
    return `<div class='note'> 
            <h3>${trashNoteTitles[index]}</h3> 
            ${note}
            <div class='btnDiv'> 
                <button class='btnDelete' onclick="deleteTrashNote(${index})">X</button> 
                <button class='btnArchive' onclick="returnTrashNote(${index})">N</button>
            </div>
            </div>`;
}