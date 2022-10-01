import { action, makeObservable, observable } from "mobx"

class AdminStore { 
    userInfo = { 
        login: "", 
        password: "", 
        isLoggedIn: false
    }

    constructor() { 
        makeObservable(this, { 
            userInfo: observable,
            setUserInfo: action
        })
    }
    setUserInfo(login: string, password: string, isLoggedIn: boolean) { 
        this.userInfo.login = login
        this.userInfo.password = password
        this.userInfo.isLoggedIn = isLoggedIn
    }
}


export default new AdminStore()