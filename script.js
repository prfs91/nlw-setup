const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-20", "01-21", "01-22"],
  takePills: ["01-20"],
  journal: ["01-25"],
}

nlwSetup.setData(data)
nlwSetup.load()
