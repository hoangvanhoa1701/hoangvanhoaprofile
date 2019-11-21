export const DetailsService = {
    getDetails(axios, entityName, entityId) {
        return axios.get(`/api/services/app/${entityName}/GetDetailDto`, { params: { id: entityId } })
            .then(resp => {
                return resp
            })
    },
    getActiveSlug(axios, oldSlug) {
        return axios.get(`/LocaleSlug/GetActiveSlug`, { params: { oldSlug: oldSlug } })
    },
    getRedirect301(axios, url) {
        return axios.get(`/api/services/app/Redirect/GetRedirect301`, { params: { url: url } })
    }
}

export default DetailsService