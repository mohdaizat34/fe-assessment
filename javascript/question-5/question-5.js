// Try to optimise function generateUsersDetail to reduce time taken.

// ***DO NOT EDIT THIS PART
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const userIds = [];
const userNames = [];
const userPhotos = [];
for (let i = 1; i <= 100000; i++) {
    userIds.push(i);
    userNames.push({ userId: i, name: randomString() });
    userPhotos.push({ userId: i, photo: `${randomString()}.png` });
}
// DO NOT EDIT THIS PART***

function generateUsersDetail(userIds, userNames, userPhotos) {
    const result = [];

  
    const names = [];
    const photos = [];


    for (let i = 0; i < userNames.length; i++) {
        names[userNames[i].userId] = userNames[i].name;
    }

    for (let i = 0; i < userPhotos.length; i++) {
        photos[userPhotos[i].userId] = userPhotos[i].photo;
    }

    for (let i = 0; i < userIds.length; i++) {
        const userId = userIds[i];

        result.push({
            userId,
            fullName: names[userId] || '', 
            photo: photos[userId] || '',  
        });
    }

    return result;
}

// ***DO NOT EDIT THIS PART
console.time('generateUsersDetail');
generateUsersDetail(userIds, userNames, userPhotos);
console.timeEnd('generateUsersDetail');
// DO NOT EDIT THIS PART***