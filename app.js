const reviews = [

    {
        name: "Bödön Ödön",
        job: "PHP programmer",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus corporis maiores aliquam in perferendis, iure eveniet nihil! Repellendus placeat eos consectetur eveniet tempore architecto fugit eum ipsum delectus nobis voluptatem quos nisi quibusdam provident minus cumque, iste ducimus temporibus corrupti porro unde illum eaque. Reprehenderit cupiditate perspiciatis quam totam. Assumenda tempora, laborum, blanditiis ducimus quibusdam voluptatem ad reprehenderit nihil commodi nulla minima est quisquam architecto perspiciatis omnis sit repellat totam nisi sed libero doloribus!"
    },

    {
        name: "Nagy Zsanett",
        job: "Marketing manager",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus corporis maiores aliquam in perferendis, iure eveniet nihil! Repellendus placeat eos consectetur eveniet tempore architecto fugit eum ipsum delectus nobis voluptatem quos nisi quibusdam provident minus cumque, iste ducimus temporibus corrupti porro unde illum eaque. Reprehenderit cupiditate perspiciatis quam totam. "
    },

    {
        name: "Török Bálint",
        job: "Automata tester",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "iure eveniet nihil! Repellendus placeat eos consectetur eveniet tempore architecto fugit eum ipsum delectus nobis voluptatem quos nisi quibusdam provident minus cumque, iste ducimus temporibus corrupti porro unde illum eaque. Reprehenderit cupiditate perspiciatis quam totam. Assumenda tempora, laborum, blanditiis ducimus quibusdam voluptatem ad reprehenderit nihil commodi nulla minima est quisquam architecto perspiciatis omnis sit repellat totam nisi sed libero doloribus!"
    }
]

//A használni kívánt elemek eltárolása változóba.
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló érték megadása
let current = 0;

//Esemény létrehozása a kiinduló személy betöltéséhez.
window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

})

//Írunk egy függvényt amellyel ki tudjuk választani a következő emberünket.
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

}

//Gombnyomásra ugorjunk a következő/előző emberre.
nextBtn.addEventListener("click", () => {

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})

prevBtn.addEventListener("click", () => {

    current--;

    if(current  < 0){

        current = reviews.length - 1;
    }

    showPerson(current);
})