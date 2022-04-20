export const contactForm = () => {
  const form = document.createElement("form"),
    styles = document.getElementById("dinamic-styles");

  styles.innerHTML = `
        .form {
  width: 80%;
  margin: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-color: rgb(36,48,60);
  border-radius: .7rem
}

.input {
  background-color: inherit;
  border: 1px solid white;
  width: 100%;
  margin: 0.5rem auto;
  display: block;
  font-family: sans-serif;
  padding: 0.4rem;
}

.input[type="submit"] {
  width: 50%;
  font-weight: bold;
  cursor: pointer;
}

.form [required]:valid {
  border: thin solid green;
}

/* .form [required]:invalid {
  border: thin solid red;
} */

.form-error {
  margin-top: -1rem;
  padding:.1rem;
  background-color: red;
  font-size: 80%;
  color: whitesmoke;
  transition: all 0.5 ease-in;
}

.form-error.is-active {
  display: block;
  animation: show-message 1s 1 normal 0s ease-out both;
}

.none {
  display: none;
}

@keyframes show-message {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
    `;

  form.classList.add("form");
  form.innerHTML = `
         <input
            class="input"
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre..."
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
            title="Nombre solo acepta letras y espacios en blanco"
            required
          />
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
            title="Email invalido"
            required
          />
          <input
            class="input"
            type="text"
            name="asunto"
            placeholder="Asunto"
            title="El asunto es requerido"
            required
          />
          <textarea
            class="input"
            name="comentario"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Escribe un comentario"
            data-pattern="^.{1,255}$"
            title="el maximo admitido es de 255 caracteres"
            required
          ></textarea>
          <input class="input enviar" type="submit" value="enviar" />
          <div class="contact-form-loader none">
            <img src="./app/assets/ball-triangle.svg" alt="loader" />
          </div>
          <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
          </div>
    `;

  const validationForm = () => {
    const inputs = document.querySelectorAll(".form [required]");
    inputs.forEach((input) => {
      let span = document.createElement("span");
      span.id = input.name;
      span.textContent = input.title;
      span.classList.add("form-error", "none");
      input.after(span);
      console.log(span);
    });

    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".form [required]")) {
        let input = e.target,
          pattern = input.pattern || input.dataset.pattern;

        if (pattern && input.value !== "") {
          let regexp = new RegExp(pattern);
          return !regexp.test(input.value)
            ? document.getElementById(input.name).classList.add("is-active")
            : document.getElementById(input.name).classList.remove("is-active");
        }
        if (!pattern) {
          return input.value === ""
            ? document.getElementById(input.name).classList.add("is-active")
            : document.getElementById(input.name).classList.remove("is-active");
        }
      }
    });
    document.addEventListener("submit", (e) => {
      e.preventDefault();
      const loader = document.querySelector(".contact-form-loader"),
        response = document.querySelector(".contact-form-response");
      loader.classList.remove("none");

      fetch("https://formsubmit.co/ajax/leo7mendoza7@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          loader.classList.add("none");
          response.classList.remove("none");
          response.innerHTML = `<p><b>${json.message}</b></p>`;
          form.reset();
        })
        .catch((err) => {
          let message =
            err.statusText ||
            `ah ocurrido un error al enviar, intente nuevamente`;
          response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(
          setTimeout(() => {
            response.classList.add("none");
          }, 3000)
        );
    });
  };

  setTimeout(() => {
    validationForm();
  }, 100);

  return form;
};
