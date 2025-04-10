var produtos = [
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Nike air Max 90",
        preco: "R$ 899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    },
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Adidas",
        preco: "R$ 1899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    },
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Nike air Max 90",
        preco: "R$ 899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    },
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Nike air Max 90",
        preco: "R$ 899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    },
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Nike air Max 90",
        preco: "R$ 899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    },
    {
        img: "https://static.nike.com/a/images/t_default/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png",
        titulo: "Nike air Max 90",
        preco: "R$ 899,99",
        descrisao: "Eleve seu estilo com o classico reinventado. Conforto supremo encontrar design inovador"
    }
]

var divProduto = document.querySelector(".produtos")

for(var i = 0; i < produtos.length; i++) {
    divProduto.innerHTML += `
        <div class="card">
            <img src="${produtos[i].img}" alt="#">
            <div class="content">
                <div class="title">
                    <h2>${produtos[i].titulo}</h2>
                    <p>${produtos[i].descrisao}</p>
                </div>
                <div class="btns">
                    <p>${produtos[i].preco}</p>
                    <button>Comprar agora</button>
                </div>
                <div class="freight">
                    <i class="fa-solid fa-truck-fast"></i>
                    <p>Frete grátis para todo o Brasil</p>
                </div>
            </div>
        </div>
    `
}