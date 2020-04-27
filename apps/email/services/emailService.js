import utilService from '../../../services/utilService.js';
import storageService from '../../../services/storageService.js';

export default {
    getEmails,
    addEmail,
    query
}

const KEY = 'emails';

function addEmail(email) {
    const { subject, body } = email;
    const emailToAdd = {
        subject,
        body,
        isRead: false,
        isSent: true,
        isStarred: false,
        sentAt: Date.now(),
        id: utilService.makeId()
    }
    gEmails.unshift(emailToAdd);
    storageService.store(KEY, gEmails);
}

function query() {
    return Promise.resolve(gEmails);
}

var gEmails = [
    { subject: 'Wassap?', body: 'Pick up! im not read yet', isRead: false, isSent: false, isStarred: false, sentAt: 1551133930594, id: utilService.makeId() },
    { subject: 'so im the second email?', body: 'Pick up! im not read yet', isRead: false, isSent: false, isStarred: false, sentAt: 1551133930594, id: utilService.makeId() },
    { subject: 'third email here! STARRED!! and sent!', body: 'Pick up!,im read!', isRead: true, isSent: true, isStarred: true, sentAt: 1551133930594, id: utilService.makeId() },
]

gEmails = storageService.load(KEY) || gEmails;

function getEmails(filterBy) {
    if (filterBy === 'all') return gEmails;
    else if (filterBy === 'starred') return gEmails.filter(email => email.isStarred);
    else if (filterBy === 'sent') return gEmails.filter(email => email.isSent);

}