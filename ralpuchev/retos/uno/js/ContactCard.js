class ContactCard {
    
    constructor(vectorInfo, container){
        this.fullName = `${vectorInfo.name.title} ${vectorInfo.name.first} ${vectorInfo.name.last}`;
        this.email = vectorInfo.email;
        this.gender = vectorInfo.gender;
        this.city = vectorInfo.location.city;
        this.age = vectorInfo.dob.age;
        this.phone = vectorInfo.phone;
        this.picture = vectorInfo.picture;
        
        this.container = container;
    }
    
    showInfo() {
        if(!this.container){
            console.log("there is no container to show contact info!");
            return;
        }
        
        let htmlResults = `
                <picture>
                    <source media="(min-width: 650px)" srcset="${this.picture.large}">
                    <source media="(min-width: 465px)" srcset="${this.picture.medium}">
                    <img src="${this.picture.thumbnail}" alt="Flowers" style="width:auto;">
                </picture>
                <div class="person_name">${this.fullName}</div>
                <div class="person_email">${this.email}</div>
                <div class="person_data">Género: <b>${this.gender}</b></div>
                <div class="person_data">Edad: <b>${this.age}</b></div>
                <div class="person_data">Ciudad: <b>${this.city}</b></div>
                <div class="person_data">Teléfono: <b>${this.phone}</b></div>
        `;
        
        this.container.innerHTML = htmlResults;
    }
}