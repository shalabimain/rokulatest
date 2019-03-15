
export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-10 col-sm-6 col-md-6 mx-auto">
        <div class="card rounded" @click="navToUserHome(liveuser.access)">
            <div class="card-body text-center">
                <img :src="'images/' + liveuser.avatar" class="rounded-circle img-fluid">
                <p>{{ liveuser.username }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.avatar == null) {
            this.liveuser.avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToUserHome(num) { 
            console.log(num);
         if (num == '3'){
               
    
            this.$router.push({ name: "userkids", params: { currentuser: this.liveuser } });

            }else{   
            this.$router.push({ name: "home", params: { currentuser: this.liveuser } });
            }
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser)); 
        }
    }
}