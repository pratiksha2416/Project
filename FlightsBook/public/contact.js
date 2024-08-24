document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const linkp=document.getElementById('linkp');
    const linka=document.getElementById('linka');
    const book=document.getElementById('book');
    const reghome=document.getElementById('reghome');
    const loghome=document.getElementById('loghome');
    const feedback=document.getElementById('feedback');
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Display alert message
    alert('Thank you for contacting us, ' + name + '!');

    // Here you can handle the form data, e.g., send it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Display thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    if(linkp){
        linkp.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='p.htm';
        });
    
    }
    if(linka){
        linka.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='a.htm';
        });
    }  
    if(book){
        book.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='p.htm';
        });
    
    }
    
    if(loghome){
        loghome.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='l.htm';
        });
    }
    
    if(reghome){
       reghome.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='r.htm';
        });
    }
    if(feedback){
       feedback.addEventListener('click',function(event){
            event.preventDefault();
            window.location.href='feedback.htm';
        });
    
    }
   
});
