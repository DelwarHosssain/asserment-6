const hanglerCatagore = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data);
    const tabContainer = document.getElementById('btn-container');
    

    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn1 " onclick ="hendelId('${category.category_id}')">${category.category}</button>`;
        tabContainer.appendChild(div);
    });

    console.log(data.data);
};
    hendelId = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer =document.getElementById('card-container')
    cardContainer.innerHTML ="";
    data.data. forEach((all) => {
        const div=document.createElement('div')
        div.innerHTML =`
        
        <div class="card w-80 md:w-96  md:h-96 ">
                <figure class=""><img src="${all?.thumbnail}
                " alt="Shoes" /></figure>
                <div>
                <div class="card-body ">
                    <div class="flex  ">
                    <div class="avatar pr-5">
                            <div class="w-8 h-8 rounded-full ">
                                <img src="${all?.authors[0].profile_picture}" />
                            </div>
                        </div>
                        <div >
                        <h2 class=" font-extrabold text-center text-lg ">${all.title}</h2>
                        </div>
                    </div >
                    <div class="flex gap-1">
                        <h2 class="font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">${all?.authors[0].profile_name}<h2>
                        <h3>${all.authors[0].verified ? all.authors[0].verified:"<img  src='image/vary.png'"}</h3>
                    </div>
                    <div class="card-actions justify-star font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">
                    <h5>${all.others.views}</h5>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(div);
    })
};

hanglerCatagore();
hendelId("1000");