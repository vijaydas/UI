
TweenMax.fromTo(".flyingelement", 1.5, {opacity: 0.0}, {opacity: 1.0});


class TeamLink {
    constructor(teamElement) {

            // assign this.tabElement to the tabElement DOM reference
      this.teamElement = teamElement;
  
      // Get the `data-tab` value from this.tabElement and store it here
      this.teamData = this.teamElement.dataset.team;
  
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:
      // Check to see if this.tabData is equal to 'all'
  
      if (this.teamData === "All") {
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll(".card");
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(`.card[data-team="${this.teamData}"]`);
      }
      // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
      this.cards = Array.from(this.cards).map(card => new TeamCard(card));
      
      // Add a click event that invokes this.selectTab
      this.teamElement.addEventListener("click", () => this.selectTeam());

      // console.log("in the TabLink");
    }
  
    selectTeam() {
      // Select all elements with the .tab class on them
      const teams = document.querySelectorAll(".team");
        
      // Iterate through the NodeList removing the .active-tab class from each element
      // Array.from(tabs).forEach(function(tab) {
      //   tab.classList.remove("active-tab")});
  
      teams.forEach(team => team.classList.remove("active-team"));
  
      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll(".card");
      //console.log(cards);
  
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach(card => card.style.display = "none");
      // Array.from(cards).forEach(function(card) {
      //   tab.classList.style.display = "none"};
  
      // Add a class of ".active-tab" to this.tabElement
      this.teamElement.classList.add("active-team");
  
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TeamCard {
    constructor(cardElement) {
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = cardElement;
    }
    selectCard() {
      // Update the style of this.cardElement to display = "flex"
      this.cardElement.style.display = "flex";
    }
  }
  
  
  
 let teams = document.querySelectorAll(".team").forEach(team => new TeamLink(team));
 console.log(teams);

 