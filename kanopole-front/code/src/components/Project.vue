    <template>
    <div>
        <h1>Projects list</h1>

        <ul>
            <li v-for="item in items" :key="item.value">
                <b>{{ item.value }}</b> => <i>{{ item.label }}</i>
            </li>
        </ul>

        <hr>

        <div class="btn btn-default" @click="loadItemsFromApi">GET API items</div>

        <hr>

        <div class="btn btn-default" @click="createMookItems">CREATE API item</div>

    
    </div>
    </template>

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


