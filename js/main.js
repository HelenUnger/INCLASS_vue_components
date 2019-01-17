(() => {

    //create a component first
    const UserComponent = {
        props: ['name', 'role'],

        template: "#userstemplate",

        created: function(){
            console.log('component says hi');
        },
        
        methods: {
            loggedFromChild(){
                console.log("logged from the component");
            },
            passEvent(){
                this.$emit('shoutup');
            }
        }
    }

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
            'activeusers' : UserComponent
        }
    });


})();