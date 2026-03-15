
      /* LÓGICA (JAVASCRIPT) */
      const visor = document.getElementById("visor");

      function digitar(valor) {
        if (visor.value === "0") visor.value = "";
        visor.value += valor;
      }

      function limpar() {
        visor.value = "";
      }

      function apagar() {
        visor.value = visor.value.slice(0, -1);
      }

      function calcular() {
        try {
          // eval faz a conta matemática baseada no texto do visor
          visor.value = eval(visor.value);
        } catch {
          visor.value = "Erro";
        }}