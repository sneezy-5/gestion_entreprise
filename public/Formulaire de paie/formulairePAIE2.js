var zoomMoins=document.querySelector('.zoomMoins')
var zoomPlus=document.querySelector('.zoomPlus')
var blocPdf=document.querySelector('.blocPdf')
var btngene=document.querySelector('.btngene')
var bubbleright=document.querySelector('.bubble-right')

zoomPlus.addEventListener('click',function(){
  blocPdf.style.transform="scale(120%)"

  btngene.style.pointerEvents="none"
  btngene.style.opacity="0.6"
  bubbleright.style.display="flex"

})

zoomMoins.addEventListener('click',function(){
    blocPdf.style.transform="scale(100%)"

    btngene.style.pointerEvents="all"
    btngene.style.opacity="1"
    bubbleright.style.display="none"
    

  })
  




  // Fonction pour convertir HTML en PDF
  function convertHTMLtoPDF() {
    const element = document.querySelector('.parent');
    const nomTravailleur=document.querySelector('.nomTravailleur')
        // Options pour la conversion en PDF
        const options = {
          margin:0,
          filename:"Bulletin de paie de M. "+nomTravailleur.innerHTML+".pdf",
          image: { type: 'png', quality: 1 },
          html2canvas: { scale: 1 },
          jsPDF: {unit:'in', format:'letter',putOnlyUsedFonts:true,floatPrecision: 16,orientation:'portrait'},
         
        };
        
        // Utiliser html2pdf.js pour convertir HTML en PDF
        html2pdf().set(options).from(element).save();
  }



