const button = document.getElementById('button');
const toasts = document.getElementById('toasts');


const messages = [
    "Hello sunshine!",
"Howdy partner!",
"Hey howdy hi!",
"Whats kickin little chicken?",
"Peek-a-boo!",
"Howdy-doody!",
"Hey there freshman!",
"My name is Ralph and Im a bad guy.",
"Hi mister!",
"I come in peace!",
"Put that cookie down!",
"Ahoy matey!",
"Hiya!",
"Ello gov-nor!",
"Top of the mornin to ya!",
"Whats crackin?",
"GOOOOOD MORNING - VIETNAM!",
"Sup homeslice?",
"This call may be recorded for training purposes.",
"Howdy howdy howdy!.",
"Hello - my name is Inigo Montoya.",
"Im Batman.",
"At least - we meet for the first time for the last time!",
"Hello - whos there - Im talking.",
"Heres Johnny!",
"You know who this is.",
"Ghostbusters - whaddya want?",
"Yo!",
"Whaddup.",
"Greetings and salutations!",
"Doctor."]; 

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}