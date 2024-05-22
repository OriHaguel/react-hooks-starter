
import { storageService } from './async-storage.service.js'
import { storageServiceDb } from './storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    get,
    save,
    getDefaultFilter,
    remove,
    addReview,
    removeReview,

}

const KEY = 'mailDB'
_createEmails()



function query(filterBy = {}) {
    return storageService.query(KEY)
        .then(cars => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                cars = cars.filter(car => regExp.test(car.vendor))
            }

            if (filterBy.minSpeed) {
                cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            }

            return cars
        })
}

function get(bookId) {
    return storageService.get(KEY, bookId)
        .then(book => {
            book = _setNextPrevBookId(book)
            return book
        })
}

function addReview(bookId, reviewToSave) {
    return get(bookId).then(book => {
        const review = _createReview(reviewToSave)
        book.reviews.unshift(review)
        save(book)
        return Promise.resolve(review)
    })

}

function removeReview(bookId, reviewId) {
    return get(bookId).then(book => {
        const newReviews = book.reviews.filter((review) => review.id !== reviewId)
        book.reviews = newReviews
        save(book)
        return Promise.resolve()
    })
}

function _createReview(reviewToSave) {
    return {
        id: utilService.makeId(),
        ...reviewToSave,
    }
}

function _setNextPrevBookId(book) {
    return storageService.query(KEY).then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevBook.id
        return book
    })
}



function remove(bookId) {
    return storageService.remove(KEY, bookId)

}

function save(book) {
    if (book.id) {
        return storageService.put(KEY, book)
    } else {
        return storageService.post(KEY, book)
    }
}


function getDefaultFilter() {
    return { title: '', price: 0 }
}


// function _saveBooksToStorage() {
//     storageService.save(KEY, gBooks)
// }


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
}

function _createEmail() {
    return {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: utilService.makeLorem(15),
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}

function _createEmails() {
    let cars = storageServiceDb.loadFromStorage(KEY)
    if (!cars || !cars.length) {
        cars = []
        for (let i = 0; i < 6; i++) {
            cars.push(_createEmail())
        }
        storageServiceDb.saveToStorage(KEY, cars)
    }
}

