const linksContent = [
    {
      label: "Week 1",
      url: "week01/index.html"
    },
    {
        label: "Week 2",
        url: "week02/index.html"
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