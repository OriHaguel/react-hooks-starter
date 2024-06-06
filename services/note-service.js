
import { storageService } from './async-storage.service.js'
import { storageServiceDb } from './storage.service.js'
import { utilService } from './util.service.js'

export const noteService = {
    query,
    get,
    save,
    getDefaultFilter,
    remove,
    getEmptyNote,
    getFilterFromSearchParams,
    saveAsEmail



}

const KEY = 'noteDB'
const MAILKEY = 'mailDB'
//_createNotes

//regExp.test(note.vendor)

function query(filterBy = {}) {

    return storageService.query(KEY)
        .then(notes => {
            notes = _createNotes()
            console.log(notes)
            if (filterBy.text) {
                const regExp = new RegExp(filterBy.text, 'i')
                notes = notes.filter(note => regExp.test(note.text))


            }

            if (filterBy.minSpeed) {
                notes = notes.filter(mail => mail.maxSpeed >= filterBy.minSpeed)
            }

            return notes
        })
}

function get(noteId) {
    return storageService.get(KEY, noteId)
        .then(note => {
            note = _setNextPrevNoteId(note)
            return note
        })
}

function getEmptyNote(type = 'text', info = {}, isPinned = false, color = '', isDeleted = false) {
    return {
        type,
        info,
        isPinned,
        color,
        isDeleted
    }


}

function _setNextPrevNoteId(note) {
    return storageService.query(KEY).then((notes) => {
        const noteIdx = notes.findIndex((currnote) => currnote.id === note.id)
        const nextnote = notes[noteIdx + 1] ? notes[noteIdx + 1] : notes[0]
        const prevnote = notes[noteIdx - 1] ? notes[noteIdx - 1] : notes[notes.length - 1]
        note.nextnoteId = nextnote.id
        note.prevnoteId = prevnote.id
        return note
    })
}



function remove(noteId) {
    console.log(query());
    return storageService.remove(KEY, noteId)

}
function saveAsEmail(note) {
    return storageService.post(MAILKEY, note)
}

function save(note) {
    if (note.id) {
        return storageService.put(KEY, note)
    } else {
        console.log(note);
        return storageService.post(KEY, note)
    }
}


function getDefaultFilter() {
    return { text: '', price: 0 }
}
function getFilterFromSearchParams(searchParams) {
    return {
        text: searchParams.get('text') || '',
        isRead: searchParams.get('isRead') || '',

    }
}


// function _savemailsToStorage() {
//     storageService.save(KEY, gmails)
// }



const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const note = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
}

function _createNote() {
    let isImgOrVideo = utilService.getRandomIntInclusive(0, 4) > 2
    var isText = utilService.getRandomIntInclusive(0, 4) > 2
    return {
        id: utilService.makeId(),

        text: utilService.makeLorem(utilService.getRandomIntInclusive(0, 80)),
        isPinned: false,
        color: artColor[utilService.getRandomIntInclusive(0, artColor.length - 1)],
        createdAt: getCurrDate(),
        isDeleted: false,
        isShowReviewModalColor: false,
        type: "text",
        vidUrl: isImgOrVideo && !isText ? 'https://www.youtube.com/embed/SXYV466i4QY?si=v0X6IHPEkwbOe590' : '',
        imgUrl: !isImgOrVideo && !isText ? 'https://images.app.goo.gl/rC2PVLbh1jfLYCgH9' : ''

    }


}


const artColor = [
    'FAAFA7',
    , 'F39F76',
    'FFF8B8',

    'E2F5D3'
]
function getCurrDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

function _createNotes() {

    let notes = storageServiceDb.loadFromStorage(KEY)
    console.log(notes);
    if (!notes || !notes.length || !!notes.length < 1) {
        notes = []
        for (let i = 0; i < 6; i++) {
            notes.push(_createNote())
            console.log(notes);
        }
        storageServiceDb.saveToStorage(KEY, notes)
    }
    return notes
}





/*function addReview(mailId, reviewToSave) {
    return get(mailId).then(mail => {
        const review = _createReview(reviewToSave)
        mail.reviews.unshift(review)
        save(mail)
        return Promise.resolve(review)
    })

}

function removeReview(mailId, reviewId) {
    return get(mailId).then(mail => {
        const newReviews = mail.reviews.filter((review) => review.id !== reviewId)
        mail.reviews = newReviews
        save(mail)
        return Promise.resolve()
    })
}

function _createReview(reviewToSave) {
    return {
        id: utilService.makeId(),
        ...reviewToSave,
    }
}
*/

