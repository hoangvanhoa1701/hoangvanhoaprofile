export const BreadcrumbService = {
    getBreadcrumb(axios, entityName, entityId) {
        return axios.get('/api/services/app/Sitemap/GetSitemapTree', { 
            params: { 
                entityName : entityName, 
                entityId : entityId 
            }
        })
        .then(resp => {
            return resp.data
        })
    }
}

export default BreadcrumbService