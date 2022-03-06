<template>
  <section id="about" class="">
    <div class="container vh-100">
      <div class="s-100-m-50 f-s-center-m-left">
        <img class="img" src="~static/images/DSC_0445.jpg">
      </div>

      <div class="s-100-m-50 f-s-center-m-left f-right">
        <div class="about-intro ">
          <p>As a <strong><h2>Software Engineer</h2></strong>, I develop/create <b>Web Applications and Websites.</b></p>
          <p>  I am a Full Stack Developer (Frontend and Backend Developmen)</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
  .img {
width: 40%;
    margin: 10px;
    border-radius: 10px;
    margin-top: 4vh;
  }
  .about-intro{
    font-size: 25px;
    margin: 5px 25px 25px 25px;
  }
  .f-bottom {
    align-content:center;
  }
   @media only screen and (min-width: 768px) {
      .img {
            width: 40%;
    height: 60%;
        margin-left: 50px;
      }
      .about-intro{
        margin-right: 30px;
        font-size: 45px;
      }
    }
</style>
