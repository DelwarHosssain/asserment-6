const hanglerCatagore = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const tabContainer = document.getElementById('btn-container');
    

    if (data.data.length === 0) {
        const noCategoryMessage = document.createElement('div');
        noCategoryMessage.innerText = 'No categories available.';
        tabContainer.appendChild(noCategoryMessage);
    } else {
        data.data.forEach((category) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <button class="btn1" onclick="hendelId('${category.category_id}')">${category.category}</button>`;
            tabContainer.appendChild(div);
        });
    }
};
// একটি উদাহরণ ডেটা তালিকা
const data1 =(views)=>{
    
}
  // "short by view" বাটনে ক্লিক করার হ্যান্ডলার ফাংশন
  function sortByViewsDescending() {
    data.sort((a, b) => b.views - a.views);
    renderCards(data1);
  }
  
  // ডেটা দিয়ে কার্ডগুলি সরবরাহ করার ফাংশন
  function renderCards(cardsData) {
    const container = document.getElementById("card-container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    cardsData.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `<h2>${card.title}</h2><p>views: ${card.views}</p>`;
      container.appendChild(cardElement);
    });
  }
  
  // "short by view" বাটনে ক্লিক করার ইভেন্ট লিস্টেনার
  document.getElementById("sort-button").addEventListener("click", sortByViewsDescending);
  
  // ডোকুমেন্ট লোড হলে ডিফল্ট সর্টিং দেখানো
  document.addEventListener("DOMContentLoaded", () => {
    renderCards(data1);
  });
  

const returnDuration=(posted_data)=>{
    const hours = Math.floor(posted_data / 3600);
    const remainingSeconds = posted_data % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const formattedTime = `${hours} hrs ${minutes} min`;
    return formattedTime
}

hendelId = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    console.log(data.data.length)

    if (data.data.length === 0) {
        const noVideosMessage = document.createElement('div');
        noVideosMessage.innerHTML = `
        <div class="space-y-16">
        <img class=" m-auto w-80 " src='image/Icon.png'>
        <h1 class="text-center text-4xl font-bold">Oops!! Sorry, There is no content here</h1>
        </div>
        `;
        const cardVideo = document.getElementById('no-videos');
        cardVideo.innerHTML = "";
        cardVideo.appendChild(noVideosMessage);
        
    } else {
        // const cardVideo = document.getElementById('no-videos');
        // if (cardVideo) {
            
        // }
        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="card  w-80 md:w-96 md:h-96">
                    <figure>
                    <div class="relative"><img src="${item?.thumbnail}" alt="" /></div>
                    ${item.others.posted_date && `<div class=" w-42 h-7 p-4 text-white text-center   absolute left-[150px] top-[90px] bg-[#171717]">${returnDuration(item.others.posted_date)}</div>` }
                   
                    </figure>
                        <div class="card-body">
                            <div class="flex">
                                <div class="avatar pr-5">
                                    <div class="w-8 h-8 rounded-full">
                                        <img src="${item?.authors[0].profile_picture}" />
                                    </div>
                                </div>
                                <div>
                                    <h2 class="font-extrabold text-center text-lg">${item.title}</h2>
                                </div>
                            </div>
                            <div class="flex gap-1">
                                <h2 class="font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">${item?.authors[0].profile_name}</h2>
                                <h3>${item.authors[0].verified ? "<img src='image/vary.png'>":"" }</h3>
                            </div>
                            <div class="card-actions justify-start font-normal text-sm text-[rgba(23, 23, 23, 0.70);]">
                                <h5>${data1(item.others.views)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(div);
        });
    }
};

hanglerCatagore();
hendelId("1000");
