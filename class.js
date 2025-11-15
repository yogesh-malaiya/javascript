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

}
let user1 = new CreateUser("John Doe", "johndoe@mail.com", "johndoe", "password123", "path/to/pic.jpg");