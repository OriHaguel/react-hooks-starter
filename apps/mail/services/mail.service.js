
import { storageService } from '../../../services/async-storage.service.js'
import { storageServiceDb } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    get,
    save,
    getDefaultFilter,
    remove,
    addReview,
    removeReview,
    isRead,
    getFilterFromSearchParams,

}

const KEY = 'mailDB'
_createEmails()



function query(filterBy = {}) {
    return storageService.query(KEY)
        .then(mails => {
            if (filterBy.subject) {
                const regExp = new RegExp(filterBy.subject, 'i')
                mails = mails.filter(mail => regExp.test(mail.subject))
            }

            if (filterBy.isRead === 'true') {

                mails = mails.filter(mail => mail.isRead === true)
            }
            if (filterBy.isRead === 'false') {

                mails = mails.filter(mail => mail.isRead === false)
            }

            return mails
        })
}

function get(mailId) {
    return storageService.get(KEY, mailId)
        .then(mail => {
            mail = _setNextPrevmailId(mail)
            return mail
        })
}

function isRead(mail) {
    return get(mail.id)
        .then(mail => {
            mail.isRead = true
            return Promise.resolve(mail)
        }).then((mail) => {
            save(mail)
            return Promise.resolve(mail)
        })


}

function addReview(mailId, reviewToSave) {
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

function _setNextPrevmailId(mail) {
    return storageService.query(KEY).then((mails) => {
        const mailIdx = mails.findIndex((currmail) => currmail.id === mail.id)
        const nextmail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
        const prevmail = mails[mailIdx - 1] ? mails[mailIdx - 1] : mails[mails.length - 1]
        mail.nextmailId = nextmail.id
        mail.prevmailId = prevmail.id
        return mail
    })
}



function remove(mailId) {
    return storageService.remove(KEY, mailId)

}

function save(mail) {
    if (mail.id) {
        return storageService.put(KEY, mail)
    } else {
        return storageService.post(KEY, mail)
    }
}


function getDefaultFilter() {
    return { subject: '', isRead: null }
}

function getFilterFromSearchParams(searchParams) {
    return {
        subject: searchParams.get('subject') || '',
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
        subject: utilService.makeLorem(3),
        body: utilService.makeLorem(30),
        isRead: false,
        sentAt: utilService.getRandomTimestamp(),
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}

function _createEmails() {
    let mails = storageServiceDb.loadFromStorage(KEY)
    if (!mails || !mails.length) {
        mails = []
        for (let i = 0; i < 10; i++) {
            mails.push(_createEmail())
        }
        storageServiceDb.saveToStorage(KEY, mails)
    }
}

