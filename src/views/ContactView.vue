<template>
    <section class="hero">
        <h1 class="text-3xl">A nice heading with a background image about connecting</h1>
    </section>

    <div class="flex justify-center gap-10">
        <div class="box">
            <h1 class="text-gradient">Led's connect</h1>
            <form class="flex flex-col" method="post" action="">
                <label for="fullName">Your name</label>
                <input name="fullName" type="text" placeholder="Bram Vander">
                <label for="email">Your email</label>
                <input name="email" type="email" placeholder="info@profolux.com">
                <label for="subject">Subject</label>
                <input name="subject" type="text" placeholder="Onderwerp">
                <label for="message">Your Message</label>
                <textarea name="message" type="text" placeholder="Offerte, advies, inspiratie, informatie..." style="height: 10rem;" />
                <br>
                <button type="submit" class="btn-primary">Submit</button>
            </form>
        </div>
        
        <div class="box h-fit">
            <div class="flex mb-8">
                <div>
                    <img src="../assets/icon/location-dark.png" />
                </div>
                <div>
                    <h3 class="text-gradient">Visit Our Office</h3>
                    <a href="https://www.google.com/maps/place/Van+Leeuwenhoekweg+8,+5482+TK+Schijndel/@51.6074186,5.4586297,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6e6d259c4dd59:0x38199a98a5988c97!8m2!3d51.6074153!4d5.4612046!16s%2Fg%2F11cp7l8r7l">Van Leeuwenhoekweg 8 5482 TK Schijndel, The Netherlands</a>
                </div>
            </div>

            <div>
                <div class="flex mb-8">
                    <div>
                        <img src="../assets/icon/phone-dark.png" />
                    </div>
                    <div>
                        <h3 class="text-gradient">Call Us Anytime</h3>
                        <a href="tel:+310735492350">+31 (0)73 549 23 50</a>
                    </div>
                </div>
            </div>
            
            <div>
                <div class="flex mb-8">
                    <div>
                        <img src="../assets/icon/mail-dark.png" />
                    </div>
                    <div>
                        <h3 class="text-gradient">Request A Quote</h3>
                        <a href="mailto:info@leduxa.com">info@leduxa.com</a>
                        <a href="mailto:sales@leduxa.com">sales@leduxa.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.861918223119!2d5.458629676929757!3d51.60741860339131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6e6d259c4dd59%3A0x38199a98a5988c97!2sVan%20Leeuwenhoekweg%208%2C%205482%20TK%20Schijndel!5e0!3m2!1snl!2snl!4v1682074436102!5m2!1snl!2snl" 
        width="100%" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <br>
</template>

<script setup>
</script>

<style>
.hero {
    background-image: url('../assets/img/link.jpg');
    background-repeat: no-repeat;
    background-size: auto;
}
</style>


