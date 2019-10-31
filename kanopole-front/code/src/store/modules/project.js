import restAdapter from '../../api/mook'

const state = {
    projects: [],
}

const actions = {
    load: async (store) => {
        try {
            var projects = await restAdapter.getProjects()
            store.commit('LOAD_PROJECTS', projects)
        } catch (err) {
            console.log('error', err)
        }
    },
}

const mutations = {
    LOAD_PROJECTS (state, projects) {
        console.log(projects)
        state.projects = projects
    },
}

const getters = {
    projects: (state) => state.projects,
    project: (state, {id: undefined}) => {
        if(payload.id === undefined){
            return null
        }
        return state.projects.filter((elt) => {
            return elt.id === id
        })
    }
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}