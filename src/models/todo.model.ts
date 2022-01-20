export class Todo { //export mostra que a classe é publica
    
    constructor(
        public id: number,
        public task: String,
        public done: Boolean,
    ) { }
}