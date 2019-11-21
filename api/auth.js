

export const ExternalProvider = {
    facebook: {
        id: 'facebook',
        name: 'Facebook',
        icon: 'fa fa-facebook',
        color: '#EC4134',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
    },
    google: {
        id: 'google',
        name: 'Google',
        icon: 'fa fa-google',
        color: '#4267B2',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo'
    }
}

export const ValidateProvider = (provider) => {
    return provider && ExternalProvider[provider]
}

const ParseHashToObject = (hash) => {
    return JSON.parse('{"' + decodeURI(hash).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

const GetTokenFromRoute = (route, tokenType) => {
    return route.query[tokenType] || ParseHashToObject(route.hash ? route.hash.replace('#', '') : route.hash)[tokenType]
}

export const GetExternalToken = (provider, route) => {
    if (!route) {
        return undefined
    }

    switch (provider) {
        case ExternalProvider.facebook.id: {
            return GetTokenFromRoute(route, 'access_token')
        }
        case ExternalProvider.google.id: {
            return GetTokenFromRoute(route, 'access_token')
        }
    }
}

export const ExternalProviderUserInfo = (provider, socialInfo) => {
    let userInfo = {
        Email: undefined,
        FullName: undefined,
        DateOfBirth: undefined,
        PhoneNumber: undefined,
        Gender: undefined,
        SocialId: undefined,
        SocialUrl: undefined,
        SocialPicture: undefined,
        ProviderName: provider
    }
    switch (provider) {
        case ExternalProvider.facebook.id: {
            userInfo.Email = socialInfo.email
            userInfo.FullName = socialInfo.name
            userInfo.SocialId = socialInfo.id
            userInfo.SocialUrl = `https://www.facebook.com/profile.php?id=${socialInfo.id}`
            userInfo.SocialPicture = socialInfo.picture && socialInfo.picture.data
                ? socialInfo.picture.data.url
                : undefined
            break
        }
        case ExternalProvider.google.id: {
            userInfo.Email = socialInfo.email
            userInfo.FullName = socialInfo.name
            userInfo.Gender = socialInfo.gender
            userInfo.SocialId = socialInfo.sub
            userInfo.SocialUrl = socialInfo.profile
            userInfo.SocialPicture = socialInfo.picture
            break
        }
    }

    return userInfo
}

const setDefaultCreateOrUpdateUserDtoValue = input => {
    return {
        ...input,
        userName: input.emailAddress,
        name: input.emailAddress,
        surname: input.emailAddress,
    }
}

export const AuthService = {
    login(axios, data) {
        return axios.post('/api/TokenAuth/Authenticate', data)
            .then(resp => {
                return resp
            })
    },
    getProfile(axios, userId) {
        return axios.get('/api/services/app/Profile/GetCurrentUserProfile')
            .then(resp => {
                return resp
            })
    },
    register(axios, data) {
        return axios.post('/api/services/app/Account/Register', setDefaultCreateOrUpdateUserDtoValue(data))
            .then(resp => {
                return resp
            })
    },
    loginSocial(axios, providerInfo) {
        return axios.post('/api/TokenAuth/ExternalAuthenticate', providerInfo)
            .then(resp => {
                return resp
            })
    },
    getSocialUserInfo(axios, provider, $auth) {
        return axios.get(ExternalProvider[provider].userinfo_endpoint, {
            transformRequest: [function (data, headers) {
                // remove Preflight request (Request method options)
                //https://medium.com/@vukongminh/axios-x%C3%A1c-th%E1%BB%B1c-v%C3%A0-b%E1%BB%8F-qua-x%C3%A1c-th%E1%BB%B1c-khi-g%E1%BB%8Di-api-trong-%E1%BB%A9ng-d%E1%BB%A5ng-731a6f79d687
                if (provider === ExternalProvider.google.id) {
                    delete headers.common
                    headers.common = {
                        'Authorization': `${$auth.getToken(ExternalProvider.google.id)}`
                    }
                }
                return data
            }]
        }).then(resp => {
            return resp
        })
    },
    getCompanySizeForDropdownList(axios) {
        return axios.get("/Auth/GetCompanySizes").then(resp => {
            return resp
        })
    },
    getUserForm(axios) {
        return axios.get("/Auth/getUserForm").then(resp => {
            return resp
        })
    },
    getUserFormInPostService(axios) {
        return axios.get("/Auth/GetUserFormInPostService").then(resp => {
            return resp
        })
    },
    forgotPassWord(axios, emailAddress) {
        return axios.get('/api/services/app/User/GetForgotPassword',
            {
                params:
                {
                    emailAddress: emailAddress
                }
            })
            .then(resp => {
                return resp
            })
    },
    resetPassword(axios, model) {
        return axios.post('/api/services/app/User/ResetPassword', model)
            .then(resp => {
                return resp
            })
    },
    changePassword(axios, model) {
        return axios.post('/api/services/app/User/ChangePassword', model)
            .then(resp => {
                return resp
            })
    }
}

export default AuthService
