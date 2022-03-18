import { observable, action, makeObservable } from 'mobx';

class AuthStore {
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            isLoading: observable,
            values: observable,
            setIsLogin: action,
            setUsername: action,
            setPassword: action,
            login: action,
            register: action,
            logout: action
        });
    }

    isLogin = false;
    isLoading = false;
    values = {
        username: 'jirengu',
        password: ''
    };

    setIsLogin(isLogin: boolean) {
        this.isLogin = isLogin;
    }

    setUsername(username: string) {
        this.values.username = username;
    }

    setPassword(password: string) {
        this.values.password = password;
    }

    login() {
        console.log('登录中...');
        this.isLoading = true;
        setTimeout(() => {
            console.log('登录成功');
            this.setIsLogin(true);
            this.isLoading = false;
        }, 1000);

    }

    register() {
        console.log('注册中...');
        this.isLoading = true;
        setTimeout(() => {
            console.log('注册成功');
            this.setIsLogin(true);
            this.isLoading = false;
        }, 1000);
    }

    logout() {
        console.log('已注销...');
    }
}

export { AuthStore };