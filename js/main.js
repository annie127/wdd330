const linksContent = [
    {
      label: "Week 1: Basics of Website Development - Local Storage",
      url: "week01/index.html"
    },
    {
        label: "Week 2: Programming Basics - Arrays - Logic - Loops - Functions",
        url: "week02/index.html"
      },
      {
      label: "Week 3: Objects - Document Object Model - Events",
      url: "week03/index.html"
    },
    {
      label: "Week 4: Forms - Object Oriented Programming - Modern Javascript",
      url: "week04/index.html"
    }

  ]

      for (let i = 0; i < linksContent.length; i++ ) {

        let myList = document.createElement('li');
        let myLinks = document.createElement('a');

        myLinks.textContent = linksContent[i].label;
        myLinks.setAttribute("href", linksContent[i].url);
    
        myList.appendChild(myLinks);
        
        document.querySelector('.ToC').appendChild(myList);

      }