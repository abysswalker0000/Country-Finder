"use strict";

const radioText = document.getElementById('radioText');
const radioButton = document.getElementById('radioButton');
const searchButton = document.getElementById('searchButton');
const countryInput = document.getElementById('countryInput');
const searchField = document.getElementById('searchField');
const resultField = document.getElementById('resultField');
const countriesList = resultField.getElementsByTagName('li');

    function toggleButton() {
        if (radioText.checked) {
            searchButton.style.display = 'none';
            countryInput.style.width = '100%';
            countryInput.addEventListener('input', finder); 
            countryInput.removeEventListener('click', finder); 
        } else {
            searchButton.style.display = 'block';
            countryInput.style.flexGrow = '1';
            countryInput.removeEventListener('input', finder);
            countryInput.addEventListener('click', finder); 
        }
    }
    
    function finder(event) 
    {
        event.preventDefault();
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
