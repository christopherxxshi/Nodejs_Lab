const bcrypt = require('bcrypt');
const saltRounds = 16;

const users = [
    {
		username: "masterdetective123",
		firstname: "Sherlock",
		lastname: "Holmes",
		profession: "Detective",
		bio: 'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
		hashedpassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.",
		sessionIDs: []
    },
    {
        username: "lemon",
		firstname: "Elizabeth",
		lastname: "Lemon",
		profession: "Writer",
        bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
        hashedpassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm",
		sessionIDs: []
    },
    {
        username: "theboywholived",
		firstname: "Harry",
		lastname: "Potter",
		profession: "Student",
        bio: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry\'s struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.',
        hashedpassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
		sessionIDs: []
    }
]
async function getAllUsers() {
	return users;
}
async function getUserByUsername(username) {
	if (!username ||typeof username != 'string')
		throw "You must input username!"

	for (let i = 0; i < users.length; i++) {
		if (users[i].username == username)
			return users[i];
	}
}

async function checkCredentials(username, password) {
	if (!username || typeof username != 'string' ){
        throw "You must input username!"
    }
		
    if (!password || typeof password != 'string'){
        throw "You must input password!"
    }

	try {
		var user = await getUserByUsername(username);
	} catch (e) {
		return false;
	}

	if (user && await bcrypt.compare(password, user.hashedpassword))
		return true;
	else
		return false;
}

async function getUserBySessionID(sid) {
    for (let i = 0; i < users.length; i++)
		for (let j = 0; j < users[i].sessionIDs.length; j++)
			if (users[i].sessionIDs[j] == sid) {
				return users[i];
            }
}

async function addUserSessionID(username, sid) {
	for (var i = 0; i < users.length; i++)
		if (users[i].username == username)
			return users[i].sessionIDs.push(sid);
}

async function expireSessionID(sid) {
	for (var i = 0; i < users.length; i++)
		for (var j = 0; j < user.sessionIDs.length; j++)
			if (users[i].sessionIDs[j] == sid)
				return users[i].sessionIDs.splice(j, 1);
}

module.exports = {
	getAllUsers,
	getUserByUsername,
	checkCredentials,
	getUserBySessionID,
	addUserSessionID,
	expireSessionID
};