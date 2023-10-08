const products = [
    { title: "Html Course" },
    { title: "JavaScript Course" },
    { title: "Cs Course" },
    { title: "React Course" },
    { title: "Thilwand Course" },
    { title: "Sass Course" },
  ];
  
  const input = document.querySelector("#text");
  const result = document.querySelector(".result");
  const filter = {
    product: "",
  };
  
  function filteredProducts(_products, _filter) {
    result.innerHTML = "";
    const filterVar = _products.filter((element) => {
      return element.title
        .toLowerCase()
        .includes(filter.product.toLocaleLowerCase());
    });
    filterVar.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item.title;
      result.appendChild(p);
      console.log(item.title);
    });
  }
  
  filteredProducts(products, filter);
  input.addEventListener("input", (item) => {
    filter.product = item.target.value;
    filteredProducts(products, filter);
  });
  