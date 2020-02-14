
import * as Enviorment from "./enviroment";
import axios from "./axios";
import * as q from 'q';



//Method is used to start session.
export function authenticate(email,password){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/authenticate";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,{
            username:email,
            password:password,
            roles:[2]
    }).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve({});
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}

//Method is used to currently authenticate user.
export function getauthenticated(){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/getauthenticated";
    var DEBUG               =   Enviorment.debug();

    axios.get(url).then(function(response){
        var response_data        =   response.data;
        console.log("getauthenticated",response_data.data)

        if(response.data !== undefined ){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data));
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}

//method is used to register user
export function registerUser(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/consignor/register";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
//Method is used to logout user
export function logout(){
    var defer                   =   q.defer();

    window.localStorage.removeItem("auth_user",null);
    window.localStorage.removeItem("expire_token",null);
    window.localStorage.removeItem("refresh_expire_token",null);
    window.localStorage.removeItem("refresh_token",null);
    window.localStorage.removeItem("session_token",null);
    defer.resolve({});

    return defer.promise;
}
export function update(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/update";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data.data));

            defer.resolve(response_data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
export function get(){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user";
    var DEBUG               =   Enviorment.debug();

    axios.get(url).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data.data));
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
export function ChangePassword(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/change_password";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;

}


export function forgotChangePassword(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/forgot_password/change_password";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });
    return defer.promise;
}
import * as Enviorment from "./enviroment";
import axios from "./axios";
import * as q from 'q';



//Method is used to start session.
export function authenticate(email,password){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/authenticate";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,{
            username:email,
            password:password,
            roles:[2]
    }).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve({});
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}

//Method is used to currently authenticate user.
export function getauthenticated(){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/getauthenticated";
    var DEBUG               =   Enviorment.debug();

    axios.get(url).then(function(response){
        var response_data        =   response.data;
        console.log("getauthenticated",response_data.data)

        if(response.data !== undefined ){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data));
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}

//method is used to register user
export function registerUser(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/consignor/register";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
//Method is used to logout user
export function logout(){
    var defer                   =   q.defer();

    window.localStorage.removeItem("auth_user",null);
    window.localStorage.removeItem("expire_token",null);
    window.localStorage.removeItem("refresh_expire_token",null);
    window.localStorage.removeItem("refresh_token",null);
    window.localStorage.removeItem("session_token",null);
    defer.resolve({});

    return defer.promise;
}
export function update(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user/update";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data.data));

            defer.resolve(response_data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
export function get(){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/user";
    var DEBUG               =   Enviorment.debug();

    axios.get(url).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            window.localStorage.setItem("auth_user",JSON.stringify(response_data.data.data));
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;
}
export function ChangePassword(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/change_password";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });

    return defer.promise;

}


export function forgotChangePassword(data){
    var defer                   =   q.defer();

    var host                =   Enviorment.host();
    var url                 =   host+"/forgot_password/change_password";
    var DEBUG               =   Enviorment.debug();

    axios.post(url,data).then(function(response){
        var response_data        =   response.data;
        if(response_data !== undefined && response_data.code === 200){
            defer.resolve(response_data.data);
        } else {
            DEBUG &&  console.log("Error",response);
            defer.reject({'error':"Something went wrong!"});
        }
    }).catch(function(error){
        if(error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined){
            DEBUG &&  console.log("Error",error.response.data);
            defer.reject({'error':error.response.data.message})
        } else {
            DEBUG &&  console.log("Error",error);
            defer.reject({'error':"Something went wrong!"});
        }
    });
    return defer.promise;
}