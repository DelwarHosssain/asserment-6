const hanglerCatagore = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data);
    const tabContainer = document.getElementById('btn-container');
    

    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `<button onclick ="hendelAl('${category.category_id}')">${category.category}</button>`;
        tabContainer.appendChild(div);
    });

    console.log(data.data);
};
const hendelAl = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    console.log(data.data);

    const cardContainer =document.getElementById('card-container')
    data.data.forEach((all) => {
        const div=document.createElement('div')
        div.innerHTML =`
        
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${all?.thumbnail}
                " alt="Shoes" /></figure>
                <div class="card-body ">
                    <div class="flex justify-start">
                    <img class="w-12" src="image/download.jpg" alt="">  
                    <h2 class="card-title">Shoes!</h2>
                    </div>
                    <p>Awlad Hossain <span><i class="fa-solid fa-heart"></i></span></p>
                    <div class="card-actions justify-center">
                    <h5>91K views</h5>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(div);
    })
};

hanglerCatagore();
