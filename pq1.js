function fMol( ) {
let massa1 =window.document.getElementById('massa1')
let ind1=window.document.querySelector('input#ind1')
let simb1=window.document.querySelector('input#simb1')
let massa2 =window.document.getElementById('massa2')
let ind2=window.document.querySelector('input#ind2')
let simb2=window.document.querySelector('input#simb2')                                                                                                            
let massa3 =window.document.getElementById('massa3')
let ind3=window.document.querySelector('input#ind3')                                        
let simb3=window.document.querySelector('input#simb3')
let res=window.document.querySelector('div#res')
let m1= Number(massa1.value)
let i1=Number(ind1.value)
let m2= Number(massa2.value)
let i2=Number(ind2.value)
let m3= Number(massa3.value)
let i3=Number(ind3.value)
let pesoMol = (m1*i1)+(m2*i2)+(m3*i3)
let s1= String(simb1.value)
let s2= String(simb2.value)
let s3= String(simb3.value)
const forSub= s1+i1+s2+i2+s3+i3
res.innerHTML= `O Peso Molar da Substância é : ${pesoMol} U.`
    if(i2==0 && i3==0){
    res.innerHTML+=`<p>A fórmula é : ${s1}<sub>${i1}</sub></p>`
    
    }else if(i3==0){
    res.innerHTML+=`<p>A fórmula é : ${s1}<sub>${i1}</sub>${s2}<sub>${i2}</sub></p>`

    }else{
   res.innerHTML+=`<p>A fórmula é : ${s1}<sub>${i1}</sub>${s2}<sub>${i2}</sub>${s3}<sub>${i3}</sub></p>`
    
    }
}