window.onload = function () {

    var app = new Vue({

        el: '#app',
        data: {
            message1: "Hello, world!",
            message2: "Vue is top!",
            message3: "At first i want sleep! <br> At second i don't know at for second",
            message4: "Vue", 
        }
    });
    function emojify(name) {
        var out = `<img src="img/` + name + `.png">`
        return out
    }
    function emojify2(name) {
        var out = `<img src="emojis/` + name + `.png">`
        return out
    }
    function cast(emoji) {
        if (!emoji) {
            emoji = "¯\\_(ツ)_/¯"
        }
        return function (wizard) {
            return emoji + wizard + emoji
        }
    }
    var method = new Vue({
        el: "#method",
        data: {
            message: "Methods",
            wizard: emojify("wizard"),
        },
        methods: {
            inferno: cast(emojify("inferno")),
            lightning: cast(emojify("lightning")),
            result: cast(emojify("result")),
            blueFire: cast(emojify("blueFire")),
        }
    });

    var method2 = new Vue({
        el: "#method2",
        data:{
            message: "Methods",
            wizard: "",
            harry: emojify2("harry"),
            hedwig: emojify2("hedwig"),
            ron: emojify2("ron"),
            scabbers: emojify2("scabbers"),
            hermione: emojify2("hermione"),
            crookshanks: emojify2("crookshanks")
        },
        methods: {
            wizards: function (){
                console.log(this.harry)
                return [
                    {name: this.harry, pet: this.hedwig},
                    {name: this.ron, pet: this.scabbers},
                    {name: this.hermione, pet: this.crookshanks}
                ]
            }
        }
    });

}