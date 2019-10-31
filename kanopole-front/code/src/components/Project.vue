    <template>
    <div>
        <h1>{{ title }}</h1>

        <!-- TODO: v-for sur project -->
    </div>
    </template>§

    <script>

    export default {
        name: "Project",
        props: {
            id: {
                required: true,
                type: Number,
            },
            title: {
                required: true,
                type: String
            },
            description: {
                required: true,
                type: String
            },
            objectives: {
                required: true,
                type: String
            },
            cost: {
                required: true,
                type: Number
            },
        },
        data(){
            return {
                features: [],
            }
        },
        computed: {
            ...mapGetters({
                projects: 'project/projects',
            }),
        },
        methods: {
            //load projects from API to Store
            async loadProjects () {
                await this.$store.dispatch('project/load')
            }
        },
        mounted() {
            //if empty projectlist, the load from API
            if(this.projects.length == 0){
                this.loadProjects()
            }
        }
    }
    </script>


