import utilService from '../../../services/utilService.js';
import storageService from '../../../services/storageService.js';

export default {
    addEmail,
    query,
    removeEmail,
    toggleAtt,
    getUnreadCount
}

const KEY = 'emails';

function addEmail(email) {
    const { subject, body } = email;
    const emailToAdd = {
        from: 'Myself',
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
    return Promise.resolve(emailToAdd);
}

function query(filterBy) {
    if (filterBy === 'all') return Promise.resolve(gEmails);
    else if (filterBy === 'starred') return Promise.resolve(gEmails.filter(email => email.isStarred));
    else if (filterBy === 'sent') return Promise.resolve(gEmails.filter(email => email.isSent));
}


function removeEmail(id) {
    const idx = _getEmailIdx(id);
    if (idx === -1) return;
    gEmails.splice(idx, 1);
    storageService.store(KEY, gEmails);
    return Promise.resolve();
}

function toggleAtt(id, att) {
    const idx = _getEmailIdx(id);
    if (idx === -1) return;
    gEmails[idx][att] = !gEmails[idx][att];
    storageService.store(KEY, gEmails);
    return Promise.resolve();
}

function _getEmailIdx(id) {
    return gEmails.findIndex(email => email.id === id);
}

function getUnreadCount() {
    var counter = 0;
    gEmails.forEach(email => {
        if (!email.isRead) counter++
    })
    return Promise.resolve(counter)
}


var gEmails = [
    { from: 'John', subject: 'Wassap?', body: 'Pick up! im not read yet', isRead: false, isSent: false, isStarred: false, sentAt: 155118230594, id: utilService.makeId() },
    { from: 'Seneca', subject: 'True happiness', body: `True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not`, isRead: false, isSent: false, isStarred: false, sentAt: 1551133930594, id: utilService.makeId() },
    { from: 'Anonymus', subject: 'third email here! STARRED!! and sent!', body: 'Pick up!,im read!', isRead: true, isSent: true, isStarred: true, sentAt: 1551133123456, id: utilService.makeId() },
    { from: 'Douglas Adams', subject: 'the answer to life, the universe and everything', body: '42', isRead: true, isSent: true, isStarred: true, sentAt: 1551133930594, id: utilService.makeId() },
    { from: 'A.Einstein', subject: `Two things are infinite:`, body: `the universe and human stupidity. and I'm not sure about the universe.`, isRead: true, isSent: true, isStarred: true, sentAt: 1551133930544, id: utilService.makeId() },
    {
        from: 'Haruki Murakami', subject: 'About fate', body: `Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn. Why? Because this storm isn’t something that blew in from far away, something that has nothing to do with you. This storm is you. Something inside of you. So all you can do is give in to it, step right inside the storm, closing your eyes and plugging up your ears so the sand doesn’t get in, and walk through it, step by step. There’s no sun there, no moon, no direction, no sense of time. Just fine white sand swirling up into the sky like pulverized bones. That’s the kind of sandstorm you need to imagine.
    And you really will have to make it through that violent, metaphysical, symbolic storm. No matter how metaphysical or symbolic it might be, make no mistake about it: it will cut through flesh like a thousand razor blades. People will bleed there, and you will bleed too. Hot, red blood. You’ll catch that blood in your hands, your own blood and the blood of others.
    And once the storm is over you won’t remember how you made it through, how you managed to survive. You won’t even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won’t be the same person who walked in. That’s what this storm’s all about.`, isRead: true, isSent: true, isStarred: true, sentAt: 1551133930598, id: utilService.makeId()
    },
    { from: 'Kurt', subject: 'Come', body: 'As you are', isRead: true, isSent: true, isStarred: true, sentAt: 1551133930594, id: utilService.makeId() },
    { from: 'Inigo Montoya', subject: 'You killed my father', body: 'Prepare to die', isRead: true, isSent: true, isStarred: true, sentAt: 1551133930594, id: utilService.makeId() }
]

gEmails = storageService.load(KEY) || gEmails;