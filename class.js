class CreateUser {
    constructor(name, email, username, password, pic) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.pic = pic; 
    } 

    getUserInfo() {
        return {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            pic: this.pic
        };
    }

    write(text){
        let h2 = document.createElement('h2');
        h2.textContent = text;
        document.body.appendChild(h2);

    }

}

class AdminUser extends CreateUser {
    constructor(name, email, username, password, pic, adminLevel) {
        super(name, email, username, password, pic);
        this.adminLevel = adminLevel;
    }

    remove(){
        document.querySelectorAll("h2").forEach(h2 => h2.remove());
    }
    removeUser(username){
        this.remove(username);
    }
}



let user1 = new CreateUser("John Doe", "johndoe@mail.com", "johndoe", "password123", "path/to/pic.jpg");
let user2 = new CreateUser("kia", "kia@mail.com", "kia", "password123", "path/to/pic.jpg");
let admin = new AdminUser("admin", "admin@mail.com", "admin1", "password123", "path/to/pic.jpg");