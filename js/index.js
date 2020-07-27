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

  $('#contactform').submit((event)=>{
    event.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('name').value
    let message=document.getElementById('message').value

    alert(`${name}, we have received your message. Thank you for reaching out to us.`)
    document.getElementById("contactform").reset();
  })

})