const p = document.querySelector("p");

const element = () => {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello World!";
  h1.classList.add("title");
  return h1;
};

document.body.insertBefore(element(), p);
