import { User } from "./UserManager";
let GLOBAL_ROOM_ID=1;
interface Room{
    user1: User,
    user2: User,
    roomId: string
}
export class RoomManager{
    private rooms:Map<string, Room>
    constructor(){

    }
    createRoom(user1: User, user2:User){
        const roomId= this.generate();
    }
    generate(){
        return GLOBAL_ROOM_ID++;
    }
}