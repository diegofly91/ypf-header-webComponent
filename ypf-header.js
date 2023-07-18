const header = document.querySelector("ypf-header");
// obtenemos los datos de la API de YPF
(async () => {
  const endpoint = "https://magdesa.ypf.com/shp/yforms-lists/metadata/";
  const graphql = JSON.stringify({
    query: ` query getGroupMetadataByPrefixes($prefixes: [String!]!) {
                     getGroupMetadataByPrefixes(prefixs: $prefixes) {
                            title
                            items {
                                title
                                data
                        }
                     }
      }`,
    variables: { prefixes: ["YPFcom - Header"] },
  });
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: graphql,
  };
  const { getGroupMetadataByPrefixes } = await fetch(endpoint, requestOptions)
    .then((result) => result.json())
    .then((result) => result.data)
    .catch((error) => console.error({ error }));
    processMetadata(getGroupMetadataByPrefixes);
})();

// secciones del menu
const typeMetadata = {
  seccion: { start: "li" },
  boton: { start: "li" },
  col: { start: "div" },
  grupo: { start: "ul" },
  link: { start: "li" },
  default: { start: "li" },
  childrens: { start: "ul" },
  logo: { start: "div" },
};

function processMetadata(getGroupMetadataByPrefixes) {
  const naveg = document.createElement("nav");
  const iconMenu = document.createElement("span");
  iconMenu.className = "openmenu";
  const seccions = document.createElement("ul");
  seccions.id = "seccions";
  naveg.appendChild(iconMenu);
  naveg.appendChild(seccions);
  getGroupMetadataByPrefixes.forEach((data) => {
    data.items.forEach((node1) => {
      node1.data.map((node2) => {
        const element = createHeaderElement(node2);
        seccions.appendChild(element);
      });
    });
  });
  const logo = naveg.querySelector(".logo");
  naveg.insertBefore(logo, naveg.firstChild);
  header.appendChild(naveg);
}

function createHeaderElement({ text, props, type, children }) {
  let element = type
    ? document.createElement(typeMetadata[type].start)
    : document.createElement("ul");
  element.className = type;
 
  if(!type && props.url && children.length === 0) {
    element = document.createElement("li");
    const linkElement = document.createElement("a");
    element.dataset.image = props.urlImage;
    const h3 = document.createElement("h3");
    linkElement.href = props.url;
    h3.textContent = text;
    linkElement.appendChild(h3);
    linkElement.className = props.style;
    element.appendChild(linkElement);
    return element;
  }
  // si es un link o un default y no tiene hijos
  if ((type === "link" || type === "default") && children.length === 0 ) {
    const linkElement = document.createElement("a");
    element.dataset.image = props.urlImage;
    const h3 = document.createElement("h3");
    linkElement.href = props.url;
    h3.textContent = text;
    linkElement.appendChild(h3);
    linkElement.className = props.style;
    element.appendChild(linkElement);
  }

  // si es un link o un default y tiene hijos
  if (type === "logo") {
    const linkElement = document.createElement("a");
    linkElement.href = props.url;
    const img = document.createElement("img");
    img.src = props.urlImage;
    img.alt = props.altImage;
    linkElement.appendChild(img);
    element.appendChild(linkElement);
  }

  //si es type boton agregamos la imagen
  if (type === "boton") {
    element.className = children.length > 0 ? element.className +" more" : element.className;
    const linkElement = document.createElement("a");
    linkElement.className = "imgBoton";
    const h2 = document.createElement("h2");
    h2.textContent = props.alt || text;
    const img = document.createElement("img");
    linkElement.href = props.url;
    linkElement.alt = props.alt;
    img.src = props.urlImage;
    img.alt = props.altImage;
    linkElement.appendChild(img);
    linkElement.appendChild(h2);
    element.appendChild(linkElement);
  }

  // si es type seccion agregamos el titulo
  if (type === "seccion") {
    const titleElement = document.createElement("h2");
    titleElement.textContent = props.title;
    element.appendChild(titleElement);
  }

  //si es typo link y tiene hijos le agregamos la imagen
  if (type === "link" && children.length > 0 && props.urlImage !== "") {
    //
    const element = document.createElement("div");
    element.className = "box";
    const img = document.createElement("img");
    img.src = props.urlImage;
    img.alt = props.altImage;
    element.appendChild(img);

    const ul = document.createElement("ul");
    let li = document.createElement("li");
    let linkElement = document.createElement("a");
    linkElement.href = props.url;
    linkElement.textContent = text;
    linkElement.className = props.style;
    li.appendChild(linkElement);
    ul.appendChild(li);
    children.forEach((child) => {
      const childLi = document.createElement("li");
      const linkElementLi = document.createElement("a");
      linkElementLi.href = child.props.url;
      linkElementLi.textContent = child.text;
      linkElementLi.className = child.props.style;
      childLi.appendChild(linkElementLi);
      ul.appendChild(childLi);
    });
    element.appendChild(img);
    element.appendChild(ul);
    return element;
  }

  // si tiene hijos
  if (children.length > 0) {
    let childElement = document.createElement("div");
    let ul = document.createElement("ul");
    if (type === "seccion") {
      element.className = element.className +" more";
      childElement.className =
        props.urlImage !== "" ? "submenu" : "submenu sitios";
      element.querySelector("h2").className = "Destacado";
    }
    children.forEach((child) => {
      if (childElement.className === "submenu sitios") {
        ul.appendChild(createHeaderElement(child));
      } else {
        childElement.appendChild(createHeaderElement(child));
      }
    });
    if (ul.children.length > 0) {
      childElement.appendChild(ul);
      element.appendChild(childElement);
    } else {
      element.appendChild(childElement);
    }
  }

  // si es type seccion y tiene imagen agregamos div.info con la imagen
  if (type === "seccion") {
    const endElement = document.createElement("div");
    endElement.className = "info";
    const imgElement = document.createElement("img");
    imgElement.src = props.urlImage;
    imgElement.alt = props.altImage;
    if (props.urlImage !== "") {
      const strongElement = document.createElement("strong");
      strongElement.textContent = props.titleImage;
      const pElement = document.createElement("p");
      pElement.textContent = props.descriptionImage;
      endElement.appendChild(imgElement);
      endElement.appendChild(strongElement);
      endElement.appendChild(pElement);
    } else {
      const imgSelect = element.querySelectorAll(".sitios ul li")[0];
      imgElement.src = imgSelect.dataset.image;
      endElement.appendChild(imgElement);
    }
    element.querySelector(".submenu").appendChild(endElement);
  }
  return element;
}

// evento cambia imagen  de la seccion sitios
header.addEventListener("mouseover", function (e) {
  if (e.target.className === "link" && e.target.dataset.image !== "") {
    header.parentElement.querySelector(".sitios .info img").src =  e.target.dataset.image;
  }
});

header.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.parentElement;
    if(window.innerWidth < 920 && (parent.className).includes("seccion")) { 
      parent.classList.toggle("open");
      return;
    }
    if (window.innerWidth < 920 && e.target.className === "openmenu") {
      let submenu = parent.querySelector("#seccions");
      submenu.classList.toggle("open");
      return;
    }
    if(window.innerWidth < 920 && parent.className === "imgBoton" && parent.parentElement.querySelectorAll("li").length > 0) {
       parent.parentElement.classList.toggle("open");
       return;
    }
    if(e.target.href !== undefined || parent.href !== undefined) {
       window.open(e.target.href || parent.href, "_blank");
    }
});
