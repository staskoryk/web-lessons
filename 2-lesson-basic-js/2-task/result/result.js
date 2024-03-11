const myName = 'Стас'
const myAge = 22
const isWorking = true

function introduceMyself1() {
    const workingStatus = isWorking ? 'я работаю' : 'я не работаю'
    console.log(`Привет, меня зовут ${myName} и мне ${myAge} лет, ${workingStatus}`)
}

function introduceMyself2() {
    let workingStatus
    if (isWorking) {
        workingStatus = 'я работаю'
    } else {
        workingStatus = 'я не работаю'
    }
    console.log(`Привет, меня зовут ${myName} и мне ${myAge} лет, ${workingStatus}`)
}

introduceMyself1()
introduceMyself2()
