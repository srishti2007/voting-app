class User{
    constructor(){
        this.index = null;
        this.name1 = null;
        this.email = null;
        this.age = null;
    }
    updateCount(){
      database.ref('/').update({
          peopleCount: count
      })
    }
    update(){
      var playerIndex = "player" + this.index;
      database.ref(playerIndex).set({
          name : this.name1,
          age : this.age,
          email : this.email
      });

    }
}