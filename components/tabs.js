class Tabs {
  constructor(tabs) {
    this.tabs = tabs;

    this.links = document.querySelectorAll(".tabs-link");

    this.links = Array.from(this.links).map(function(link) {
      return new TabLink(link);
    });

    this.selectedTab = null;

    for (let i = 0; i < this.links.length; i = i + 1) {
      //     console.log(this.links[i].link);
      //     console.log(this.links.classList);
      if (this.links[i].link.classList.contains("tabs-link-selected")) {
        this.selectedTab = this.links[i];
        break;
      }
    }
    this.links.forEach(link => {
      link.link.addEventListener("click", () => this.select(link));
    });
  }
  select(link) {
    this.selectedTab.deselect();
    this.selectedTab = link;
    link.select();
  }

  deselect() {
    this.selectedTab.deselect();
  }
}

class TabLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
    this.link = link;

    // Get the custom data attribute on the Link
    //this.data = document.querySelector(`.tabs-items[data-tab='${this.data}']`);
    this.data = this.link.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);

    // Add a click event listener on this instance, calling the select method on click
    //this.link.addEventListener("click", () => this.select());
  }

  select() {
    // // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll(".tabs-link");
    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach(function(link) {
    //   link.classList.remove("tabs-link-selected");
    // });
    // // Add a class named "tabs-link-selected" to this link
    // this.link.classList.add("tabs-link-selected");
    // // Call the select method on the item associated with this link
    this.link.classList.add("tabs-link-selected");
    this.tabItem.select();
  }

  deselect() {
    this.link.classList.remove("tabs-link-selected");
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(link) {
    // Assign this.element to the passed in element
    this.link = link;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element

    // items.forEach(function(link) {
    //   link.classList.remove("tabs-item-selected");
    // });

    // Add a class named "tabs-item-selected" to this element

    this.link.classList.add("tabs-item-selected");
  }

  deselect() {
    this.link.classList.remove("tabs-item-selected");
  }
}

/* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */

// const links = document.querySelectorAll(".tabs-link");

// links.forEach(function(link) {
//   return new TabLink(link);
// });

new Tabs(document.querySelector(".tabs"));
