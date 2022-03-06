<template>
  <section id="about" class="">
    <div class="container vh-100">
      <div class="s-100-m-50 f-s-center-m-left f-center">
        
        <img class="img white-card" src="~static/images/DSC_0445.jpg">
      </div>

      <div class="s-100-m-50 f-s-center-m-left f-center white-bg">
        <div class="about-intro ">
          <p class="">As a <strong><h2>Software Engineer</h2></strong>, I develop/create <b>Web Applications and Websites.</b></p>

          <p class="next-paragraph">  I am a <strong><h2>Full Stack Developer</h2></strong> (Frontend and Backend Development)</p>
          <div class="next-paragraph">Let's connect in <a href="https://www.linkedin.com/in/florante-rapio-407666141/" target="_blank">LinkedIn</a> </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
  .next-paragraph > a {
    color: inherit;
  }
  .img {
    width: 40%;
    height: 70%;
    margin: 10px;
    border-radius: 10px;
    margin-top: 4vh;
  }
  .about-intro{
    font-size: 25px;
    margin: 10px 10px 10px 50px;
    text-align: center;
  }
  .white-bg {
    background-color: #fff;
  }
  .f-bottom {
    align-content:center;
  }
   @media only screen and (min-width: 768px) {
      .img {
            width: 40%;
        height: 30vw;
        margin-left: 80px;
      }
      .about-intro{
        margin-right: 30px;
        font-size: 35px;
        text-align: left;
      }
    }
</style>
