
export default {

    //GET /projects
    async getProjects() {
        return [
            {
                id: 1,
                title: "Yolo",
                description: "You Live Only Once",
                objectives: "Get through",
                cost: 1000000,
                features: [
                    {
                        id: 1,
                        title: "Be Born",
                        description: "Get to life",
                        userValue: 50,
                        cost: 0,
                        order: 0,
                    },
                    {
                        id: 1,
                        title: "Live",
                        description: "Get through",
                        userValue: 100,
                        cost: 50,
                        order: 1,
                    },
                    {
                        id: 1,
                        title: "Die",
                        description: "what else?",
                        userValue: 10,
                        cost: 80,
                        order: 2,
                    },
                ] 
            },
            {
                id: 2,
                title: "Yoli",
                description: "You Live Only Inch",
                objectives: "Get through",
                cost: 80000,
                features: [
                    {
                        id: 1,
                        title: "Be Born",
                        description: "Get to life",
                        userValue: 50,
                        cost: 0,
                        order: 0,
                    },
                    {
                        id: 1,
                        title: "Live",
                        description: "Get through",
                        userValue: 100,
                        cost: 50,
                        order: 1,
                    },
                    {
                        id: 1,
                        title: "Die",
                        description: "what else?",
                        userValue: 10,
                        cost: 80,
                        order: 2,
                    },
                ] 
            },
            {
                id: 3,
                title: "Yola",
                description: "You Live Only Acetaintime",
                objectives: "Get through",
                cost: 50000,
                features: [
                    {
                        id: 1,
                        title: "Be Born",
                        description: "Get to life",
                        userValue: 50,
                        cost: 0,
                        order: 0,
                    },
                    {
                        id: 1,
                        title: "Live",
                        description: "Get through",
                        userValue: 100,
                        cost: 50,
                        order: 1,
                    },
                    {
                        id: 1,
                        title: "Die",
                        description: "what else?",
                        userValue: 10,
                        cost: 80,
                        order: 2,
                    },
                ] 
            },
        ]
    },

    //GET /project/{id}
    async getProjectById(id) {
        return {
            id: 1,
            title: "Yolo",
            description: "You Live Only Once",
            objectives: "Get through",
            cost: 1000000,
            features: [
                {
                    id: 1,
                    title: "Be Born",
                    description: "Get to life",
                    userValue: 50,
                    cost: 0,
                    order: 0,
                },
                {
                    id: 1,
                    title: "Live",
                    description: "Get through",
                    userValue: 100,
                    cost: 50,
                    order: 1,
                },
                {
                    id: 1,
                    title: "Die",
                    description: "what else?",
                    userValue: 10,
                    cost: 80,
                    order: 2,
                },
            ] 
        }
    },

}