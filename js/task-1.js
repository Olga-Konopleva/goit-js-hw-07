const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории.`);


categoriesRef.forEach(element => {
     const listRef = element.querySelectorAll('ul > li');
     const title = element.firstElementChild.textContent;
     console.log(`Категория: ${title}\nКоличество элементов: ${listRef.length}`);
});
