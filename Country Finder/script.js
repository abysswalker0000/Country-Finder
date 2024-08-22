"use strict";

    const radioText = document.getElementById('radioText');
    const radioButton = document.getElementById('radioButton');
    const searchButton = document.getElementById('searchButton');
    const countryInput = document.getElementById('countryInput');
    const searchField = document.getElementById('searchField');
    const resultField = document.getElementById('resultField');


    function toggleButton() {
        if (radioText.checked) {
            searchButton.style.display = 'none';
            countryInput.style.flexGrow = '2';
            countryInput.addEventListener('input', Finder); 
            countryInput.removeEventListener('click', Finder); 
        } else {
            searchButton.style.display = 'inline-block';
            countryInput.style.flexGrow = '1';
            countryInput.removeEventListener('input', Finder);
            countryInput.addEventListener('click', Finder); 
        }
    }
    
    function Finder(event) 
    {
        console.log('button pressed');
        event.preventDefault();
        const countriesList = resultField.getElementsByTagName('li');
        const searchText = countryInput.value.toLowerCase();

        if (searchText === '') 
        {
          
            for (let i = 0; i < countriesList.length; i++) 
            {
                countriesList[i].style.display = '';
            }
        } 
        else 
        {
            for(let i=0; i<countriesList.length;i++)
            {
                const country = countriesList[i].textContent.toLowerCase();
                if(country.includes(searchText))
                {}
                else
                {
                    countriesList[i].style.display ='none';
                }
           }
        }
    }
    

    radioText.addEventListener('change', toggleButton);
    radioButton.addEventListener('change', toggleButton);
    searchButton.addEventListener('click',Finder);
