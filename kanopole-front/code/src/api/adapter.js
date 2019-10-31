import axios from 'axios'

const host = 'http://localhost'
const port = 53000;

const client = axios.create({
    baseURL: host+':'+port+'/'
    // timeout: 1000,
})

export default {

    /**
     * Fetch all projects
     */
    async getProjects(){
        try{
            var {data} = await client.get('/projects')
            return data
        }catch(err){
            throw err
        }
    },

    /**
     * 
     * @param {*} projectId 
     */
    async getProjectById(projectId){
        try{
            var {data} = await client.get('/project/' + projectId)
            return data
        }catch(err){
            throw err
        }
    }

    // Set Favorite prop for a show
    // async setFavoriteById(showId, favorite){
    //     try{
    //         var {data} = await client.post('rest/shows/' + showId + '/favorites', {
    //             isFavorites: favorite
    //         })
    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }
}