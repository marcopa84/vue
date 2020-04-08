var app = new Vue (
    {
        el:'.container',
        data:{
            todos:[
                {
                    text: 'comprare acqua',
                    done: true
                },
                {
                    text:'comprare latte',
                    done: false
                },
                {
                    text:'comprare pane',
                    done: false
                }
            ],
            newTodo: '',
        },
        methods:{
            savetodo(){
                var newTodo = {
                    text:this.newTodo,
                    done: false
                }
                
                if (this.newTodo.length > 0) {
                    this.todos.push(newTodo);
                    this.newTodo = '';
                }

            }
        },
    }
);