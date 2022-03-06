<template>
<section class="hero">
  <div class="container md-6-sm-12">
    <div class="intro">
      <p class="">Hi there, I am</p>
      <h1 class="">Florante Rapio</h1>,
      <p class="">a Software Engineer.</p>
    </div>

    <div class="scroll-down">
      <div class="scroll-down-button" href="#"><a href="#about"> Learn more about me  <li href="#about" class="down-arrow">  &#x2193; </li></a> </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
/*
color blue: 4375ff
color gray: 9e9e9e
*/
  .break {
    flex-basis: 100%;
    height: 0;
  }
  .hero {
    height: 100vh;
    font-size: 45px;
    background-color: #4375ff;
  }
  .intro {
    margin: 4rem 2rem;
    width: 100%;
    color: #ffffff;
  }
  .scroll-down-button {
    color:#ffffff;
    text-transform: uppercase;
    display: inline-block;
    font-size: 20px;
  }
  .scroll-down {
    display: flex;
    justify-content: center;
    align-items:flex-end;
    width: 100%;
  }
  .down-arrow {
    display: inline-block;
    font-size: 7vw;
    color:#ffffff;
    animation-duration: 4s;
    transition: all 0.25s ease-out;
  }
  a {
    text-decoration: none;
    color:#ffffff;
  }
  .down-arrow:hover:after {
  width: 100%;
  left: 0;
}
  .down-arrow:hover {
    margin-bottom: 5px;

  }
  @media only screen and (min-width: 768px) {
    .down-arrow {
      display: inline-block;
      font-size: 5wv;
      margin-top: 40px;
    }

    .scroll-down {
      display: flex;
      justify-content: end;
      align-items:flex-end;
      height: 100vh;
      width: 40%;
    }
      .intro {
      margin: 4rem 2rem;
      width: 50%;
      color: #ffffff;
    }

    .hero {
      font-size: 70px;
    }
  }
</style>
