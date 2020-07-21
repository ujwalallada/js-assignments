class User
{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    login()
    {
        console.log("Hey you have logged in!!!!");
        return this;
    }
    logout()
    {
        console.log("Meet u soon,you have logged out");
        return this;
    }
}
class Moderator extends User
{
    constructor(name,age,email,coins)
    {
        super(name,age,email);
        this.coins=0;
        this.courses=[];
    }
    
    addcoins()
    {
        this.coins++;
        console.log(`Hurray!!!! ${this.name} has currently ${this.coins} coins!!!`);
        return this;
    }
    remcoins()
    {
        this.coins--;
        console.log(`Oh Shit!!! ${this.name} has currently ${this.coins} coins!!!`);
        return this;
    }
}
class Admin extends Moderator
{
    addcourse(user,course)
    {
        user.courses.push(course);
        console.log(`user has added ${course}`) ;
        return this;
    }
    delcourse(user,course)
    {
        user.courses=user.courses.filter(courses=>courses!==course);
        console.log(`user has succesfully deleted ${course}`);
        return this;
    }
}
let user1 = new Moderator("Ujwal",20,"nencheppa@gmail.com")
let admin = new Admin("Thope",90,"nenethope@gmail.com");
let users=[user1,admin];
users.forEach(el=>{
    console.log(el);
});
admin.addcourse(user1,'javascript');
admin.addcourse(user1,'python');
admin.addcourse(user1,'c#')
admin.delcourse(user1,'python');
admin.login().addcoins().addcoins().logout();