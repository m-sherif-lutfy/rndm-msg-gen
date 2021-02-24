let rndmMsg = {
    // an array of salutations.
    first : ["Oi", "Hello", "Heya", "Sup", "Evenin'", "Morning", "Hola", "Bonjour", "Ya hala"],
    // an arry of characters.
    second : ["Madam", "Sir", "Joker", "Poppet", "Cap'n", "Sunshine", "Doll", "Smartass", "Prof"],
    // an array of actions.
    third : ["Care for some tea?",
            "Wanna hit some baseballs?",
            "How about something to eat?",
            "Come join me for some booze!",
            "Hoist the sails and head for the horizon!",
            "You need to get some rest before we go.",
            "Why so serious?",
            "Write this down before I wipe it off!",
            "We need to hit the road, and don't come back no more."],
    // method that generates the random message.        
    generate () {
        const x = this.first[Math.floor(Math.random() * this.first.length)];
        const y = this.second[Math.floor(Math.random() * this.second.length)];
        const z = this.third[Math.floor(Math.random() * this.third.length)];

        return `${x}, ${y}. ${z}`;
    }
};

console.log(rndmMsg.generate());