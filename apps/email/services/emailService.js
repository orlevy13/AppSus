import utilService from '../../../services/utilService.js';
export default {
    getEmails,
}


var gEmails = [
    { subject: 'Wassap?', body: 'Pick up! im not read yet', isRead: false, isStarred: false, sentAt: 1551133930594, id: utilService.makeId() },
    { subject: 'so im the second email?', body: 'Pick up! im not read yet', isRead: false, isStarred: false, sentAt: 1551133930594, id: utilService.makeId() },
    { subject: 'third email here! STARRED!!', body: 'Pick up!,im read!', isRead: true, isStarred: true, sentAt: 1551133930594, id: utilService.makeId() },
]

function getEmails(filterBy) {
    if (filterBy === 'all') return gEmails;
    else if (filterBy === 'starred') return gEmails.filter(email => email.isStarred);
    
}