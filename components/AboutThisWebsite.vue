<template>
  <section id="about-this-website" class="container f-center">
    
    <div class="white-card">
        <div class="margins">
                <p class="about-this-website-head">About this website</p>
        <p>This website is created using NuxtJS and Deployed in Heroku.. So Far. This is in continuous development and I am planning to integrate a backend for this one.</p>
        <p class="next-paragraph">you can find the source code for this one in GitHub - <a href="https://github.com/plurantee/flogramming-nuxt" target="_blank">flogramming-nuxt</a></p>
    
        </div>
    </div>  
    
  </section>
</template>

<style scoped>
.next-paragraph {
    
}
.next-paragraph > a {
    color: inherit;
}
#about-this-website {
    margin-top: 50vh;
    height: 100vh;
}
.white-card {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.8);
 }
.about-this-website-head {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 30px;

}
.margins {

    margin: 30px 70px 40px 70px;
}

  @media only screen and (min-width: 768px) {
      #about-this-website {
    margin-top: 10vh;
    height: 100vh;
}
      .white-card{
          max-width: 50%;
      }
  }
</style>

<script>
</script>