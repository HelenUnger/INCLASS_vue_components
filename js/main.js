(() => {

    //create a component first
    const HomePageComponent = {
        template : "<h2>This is the homepage</h2>"
    }

    const ContactPageComponent = {
        template : "<h2>This is the contact page</h2>"
    }

    const UsersPageComponent = {
        template : "<h2>This is the users page</h2>"
    }

    const routes = [
        {path: '/', name: 'home', component: HomePageComponent },
        {path: '/contact', name: 'contact', component: ContactPageComponent },
        {path: '/users', name: 'users', component: UsersPageComponent },
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
        },

        router: router

    });


})();