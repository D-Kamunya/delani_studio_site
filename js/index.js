(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';fnames[2]='MESSAGE';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
$(document).ready(()=>{
  $('#design').click(()=>{
    $('#design-img').toggle()
    $('#design-text').toggle()
  })
  $('#dev').click(()=>{
    $('#dev-img').toggle()
    $('#dev-text').toggle()
  })
  $('#product').click(()=>{
    $('#product-img').toggle()
    $('#product-text').toggle()
  })

  $('.project1').hover(()=>{
    $('.projectName1').toggle()
  })
  $('.project2').hover(()=>{
    $('.projectName2').toggle()
  })
  $('.project3').hover(()=>{
    $('.projectName3').toggle()
  })
  $('.project4').hover(()=>{
    $('.projectName4').toggle()
  })
  $('.project5').hover(()=>{
    $('.projectName5').toggle()
  })
  $('.project6').hover(()=>{
    $('.projectName6').toggle()
  })
  $('.project7').hover(()=>{
    $('.projectName7').toggle()
  })
  $('.project8').hover(()=>{
    $('.projectName8').toggle()
  })

  $('#mc-embedded-subscribe-form').submit((event)=>{
    event.preventDefault()
    let name=document.getElementById('mce-NAME').value
    let email=document.getElementById('mce-EMAIL').value
    let message=document.getElementById('mce-MESSAGE').value

    alert(`${name}, we have received your message. Thank you for reaching out to us.`)
    document.getElementById("mc-embedded-subscribe-form").reset();
  })

})