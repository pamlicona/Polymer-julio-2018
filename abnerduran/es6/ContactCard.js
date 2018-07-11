'use Strict';

class ContactCard {

    constructor(gender, city, age, phone) {
        this.gender = gender;
        this.city = city;
        this.age = age;
        this.phone = phone;
    }

    addCard() {
        SECTION_CARDS.innerHTML += `
        <div class="card\">
            <div class="\person\">
                <ul>
                    <li><span>Gender:</span> ${this.gender}</li>
                    <li><span>City:</span> ${this.city}</li>
                    <li><span>Age:</span> ${this.age}</li>
                    <li><span>Phone:</span> ${this.phone}</li>
                </ul>
            </div>
        </div>`;
    }
}