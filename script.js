const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button =
  document.querySelector(
    "header button"
  ) /* a tag button do header foi colocada dentro da variável button */

button.addEventListener(
  "click",
  add
) /* adiciona algo que vai estar ouvindo o evento */

function add() {
  /* Date é uma função existente na biblioteca da linguagem, toLocaleDateString é outra função retorna a data atual, pt-br é pra ser no estilo de data do Brasil e não americana que é padrão, se estiver vazio fica no estilo mm/dd/yyyy, o slice é uma função que a gente pode recortar, fatiar uma string, no caso queremos apenas o dia e o mês da data*/
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso❗")
    return
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}
// const data = {
//   run: ["01-20", "01-21", "01-22"],
//   takePills: ["01-20"],
//   journal: ["01-25"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
