const wrapperEle = document.getElementById("wrapper");

const freelancers = [
    {
        name: "Alice",
        occ: "Writer",
        sp: 30
    },
    {
        name: "Carol",
        occ: "Programmer",
        sp: 70
    },
    {
        name: "Bob",
        occ: "Teacher",
        sp: 70
    }
];

const titleEle = document.createElement("h1"); 
titleEle.innerHTML = "FreeLancer Forum";
wrapperEle.appendChild(titleEle);

function avgPrices(fl){
    const averagePricesEle = document.createElement("p");
    const average = fl.reduce((acc, cv) => acc + cv.sp, 0) / fl.length; // Corrected average calculation
    averagePricesEle.innerHTML = `The average starting price is ${average}`; 
    wrapperEle.appendChild(averagePricesEle);
}

avgPrices(freelancers);

function availableFreeLancers(fl){
    // creating elements
    const freelancersWrapperEle = document.createElement("div");
    const freelancersTitleEle = document.createElement("h1");
    freelancersTitleEle.innerHTML = "Available Freelancers";

    const freelancerTable = document.createElement("div");
    const titlesEle = document.createElement("div");
    titlesEle.style.display = "flex";
    titlesEle.style.justifyContent = "space-around";

    let titles = "";
    for(let prop in fl[0]){
        titles += `<h1>${prop}</h1>`;
    }
    titlesEle.innerHTML = titles;

    freelancerTable.appendChild(titlesEle);

    fl.forEach((i) => {
        const row = document.createElement("div");
        // Set row to flex display
        row.style.display = "flex"; 
        row.style.justifyContent = "space-around"; 

        for(let p in i){
            const data = document.createElement("div");
            data.innerHTML = `<h1>${i[p]}</h1>`;
            row.appendChild(data);
        }
        freelancerTable.appendChild(row);
    });

    freelancersWrapperEle.appendChild(freelancerTable);
    wrapperEle.appendChild(freelancersWrapperEle);
}

availableFreeLancers(freelancers);

