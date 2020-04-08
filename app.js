const parkList = document.getElementById("parks-list");

async function getParks() {
    let response = await fetch('https://prm-interview.s3.amazonaws.com/parks.json');
    return response.json();
}

getParks().then(parkData => {
    parkData.forEach(park => {
        let listItem = createParkCard(park['Name'], park['Image'], park['Thumbnail'], park['Location'], park['Established'], park['Area'], park['Recreation visitors'], park['Description']);
        parkList.appendChild(listItem);
    })
});


function createParkCard(name, image, thumbnail, location, establishedDate, area, visitors, description) {
   let listItem = document.createElement('div');
   listItem.classList.add('flip-card');

    let innerContent = document.createElement('div');
    innerContent.classList.add('flip-card-inner');

    let frontCard = document.createElement('div');
    frontCard.classList.add('flip-card-front');

    let parkImage = document.createElement('img');
    parkImage.classList.add('image');
    parkImage.src = image;

    frontCard.appendChild(parkImage);
    innerContent.appendChild(frontCard);

    let backCard = document.createElement('div');
    backCard.classList.add('flip-card-back');
    backCard.appendChild(backCardContent(name, location, establishedDate, area, visitors, description));
    innerContent.appendChild(backCard);

    listItem.appendChild(innerContent);

    return listItem;
}

function backCardContent(name, location, establishedDate, area, visitors, description) {
    let splitArea = area.split(' ');
    let summaryParagraph = document.createElement('p');
    summaryParagraph.classList.add('center');
    summaryParagraph.innerHTML = `${name} National Park is located in ${location}. It was first established on ${establishedDate}. It covers an area of ${splitArea[0]} acres and attracts ${visitors} visitors every year. ${description}`;
    return summaryParagraph;
}

console.log(parkList);


