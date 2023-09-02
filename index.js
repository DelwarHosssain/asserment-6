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
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    console.log(data.data);

    const cardContainer =document.getElementById('card-container')
    data.data.forEach((all) => {
        const div=document.createElement('div')
        div.innerHTML =`
        
        <div class="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="${all?.thumbnail}
                " alt="Shoes" /></figure>
                <div class="card-body ">
                    <div class="flex  ">
                    <div class="avatar">
                            <div class="w-16 h-16 rounded-full ">
                                <img src="${all?.authors[0].profile_picture}" />
                            </div>
                        </div>
                        <div>
                        <h2 class=" p-5  font-extrabold text-center text-lg ">${all.title}</h2>
                        </div>
                    </div >
                    <p class="font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">${all?.authors[0].profile_name} <span><i class="fa-solid fa-handshake "></i></span></p>
                    <div class="card-actions justify-star font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">
                    <h5>91K views</h5>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(div);
    })
};

hanglerCatagore();


// posted_date
// : 
// "13885"
// views
// : 
// "1.1K"
// [[Prototype]]
// : 
// Object
// thumbnail
// : 
// "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg"
// title
// : 
// "Laugh at My Pain"