class Brendan
    extends Human
    implements programmer { //~ works hard learn programming
    writeCode(): void {
        console.log("Create JavaScript language");

    }

}
class sanjay
    extends Human
    implements musician, programmer {
    writeCode(): void {
        console.log('10 print "Hello world"');


    }
    playMusic(): void {
        console.log("sa re gama pa");
    }
}


interface musician {
    playMusic(): void;

}
interface programmer {
    writeCode(): Void;
        
}
class Human {
    eat() {
        console.log("champ! champ!!");

    }
}

const eich = new Brendan();