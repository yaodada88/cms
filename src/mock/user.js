import {getToken} from '@/common/auth.js'

const userMap = {
    //键名和token保持一致
    //permissions是用户的权限
    //相对于用role做权限,permissions这样可以定制每一个用户的权限
    //permissions 不能为空

    admin:{
        token:"admin",
        name:"Admin",
        age:10,
        permissions:'/excel,/clipboard,/theme',
        avatar:"../../public/common/img/avatar/0.jpg"
    },
    lucy:{
        token:"lucy",
        name:"Lucy",
        age:12,
        permissions:"/excel,/theme",
        avatar:"./public/common/img/avatar/1.jpg"
    }
}

function pullUserInfo(){
    return userMap[getToken()]
}

export {userMap,pullUserInfo}