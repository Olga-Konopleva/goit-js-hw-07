const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const liTags =ingredients.map(item => {
          const li = document.createElement('li');
      li.textContent = item;
      return li;
  });

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...liTags);


