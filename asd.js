const elName = document.querySelector ('input[name="nombre"]');
const elLastName = document.querySelector ('input[name="email"]');
const radios1 = document.querySelector ('#gridRadios1');
const radios2 = document.querySelector ('#gridRadios2');
const radios3 = document.querySelector ('#gridRadios3');
const elChecked = document.querySelector ('input[name="checked"]');


function onSubmit()
        {
            let valid = true;


            //name
            if(!elName.value)
            {
                valid = false;
                console.log('missing name');
                
            }
            //email
            if(!elLastName.value)
            {
                valid = false;
                console.log('missing email');
            }

            //radios
            if(radios1.checked || radios2.checked || radios3.checked)
            {
                valid= true;
               
            }else{
                valid= false;
                console.log('missing radios');
            }
            
            //checkbox
            if(!elChecked.checked)
            {
                valid = false;
                console.log('missing checkbox');
            }

            //validation message
            if(valid == true)
            {
                alert('Success!');
                console.log (valid);
                
                            return valid;
            }else{
                alert('Something missing! :C');
                console.log (valid);
                
                            return valid;
            }
            


        }



