(() => {

    //create a component first
    const HomePageComponent = {
        template : "<h2>This is the homepage</h2>"
    }

    const ContactPageComponent = {
        template : "<h2>This is the contact page</h2>"
    }

    const UsersPageComponent = {
        props: ['id'], //this.id
        template : "#user-list",

        //isolate all conponent data
        data: function(){
            return {
                users: []
            }
        },

        created: function(){
            console.log('user component created');
            console.log(this.id);

            this.fetchUserData(this.id);
        },

        methods: {
            fetchUserData(users){
                let url = `./includes/index.php?users=${this.id}`;

                fetch(url)
                .then(res=>res.json())
                .then(data=>this.users = data)
                .catch(function(error){
                    Console.error(error);
                });
            }
        }
    }

    const ErrorPageComponent = {
        template : "<h2>Page not found..</h2>"
    }

    const routes = [
        {path: '/', name: 'home', component: HomePageComponent },
        {path: '/contact', name: 'contact', component: ContactPageComponent },
        {path: '/users/:id', name: 'users', component: UsersPageComponent, props: true },
        {path: '/*', name: 'error', component: ErrorPageComponent},
    ]

    const router = new VueRouter({
        routes
    });



    //then your vue instance

    const vm = new Vue({
        el: "#app",

        data: {
            testmessage: "sup"
        },

        methods: {
            calledOnParent(){
                console.log("this method lives in the main VM and was called from a component");
            }
        },

        
        created: function(){
            console.log('vm says hi');
        },

        components: {
            'homepagecomponent' : HomePageComponent,
            'contactpagecomponent' : ContactPageComponent,
            'userspagecomponent' : UsersPageComponent,
            'errorpagecomponent' : ErrorPageComponent,
        },

        router: router

    });


})();