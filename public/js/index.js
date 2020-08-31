var listacc = document.getElementById("listacc")
listacc.addEventListener("click", function (e) {
   listaccClicked(e)
})
var listaccClicked = (event) => {
   var button = event.target
   switch (button.dataset.btn) {
      case "copy": {
         var name = button.dataset.name
         navigator.clipboard.writeText(name)
         console.log(`đã coppy ${name}`)
         break
      }
   }
}