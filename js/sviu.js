var request = new XMLHttpRequest();

request.open('GET', 'http://192.168.33.101:9110/v1/cluster', true);

request.onload = function() {
    var data = JSON.parse(this.response)
    if (request.status == 200) {
        app.message = data.cluster.id
    } else {
        console.log('error')
    }
}

request.send();

var app = new Vue({
    el: '#app',
    data: {
        message: '',
    }
})