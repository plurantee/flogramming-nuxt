<template>
  <section id="work-experience" class="container f-center">
    
    <div class="white-card work-experience-card">
        <div v-for="workExperience in workExperiences" v-bind:key="workExperience.id">
            <div class="work-experience-single">
                <p class="company-name">
                    {{workExperience.company}}
                </p>
                <p class="company-title">
                    {{workExperience.title}}
                </p>
                <p class="company-stay">
                    {{workExperience.stay}}
                </p>
                <p class="company-work-summary">
                    {{workExperience.workSummary}}
                </p>
            </div>
        </div>
    </div>  
    
  </section>
</template>

<style scoped>
#work-experience {
    margin-top: 10vh;
    height: 100vh;
}
.work-experience-card {
    margin-top: 2em;
}
.work-experience-single{
    margin: 30px 70px 40px 70px;
}
.company-name {
    font-weight: 700;
    font-size: 2rem;
}
.company-title {
    font-weight: 500;
    font-size: 1.2rem;
}
.company-stay {
    font-weight: 500;
    color:rgb(161, 161, 161);
    font-size: 1rem;
    margin-bottom: 20px;
}
.white-card {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.8);
 }

  @media only screen and (min-width: 768px) {
      .white-card{
          max-width: 50%;
      }
  }
</style>

<script>
export default {
    data() {
        return {
            test: 'test hehe',
            workExperiences: [
                { 
                    id: '1', 
                    company: 'ING', 
                    title: 'Java Engineer',
                    workSummary: 'I did some stuff... you know, bank stuff and dev stuff. We used, you guessed it right, Java :) Created a middleware api that does some digitalization stuff... And the project is in Belgium, ING Belgium' ,
                    stay: 'July 2021 - present'
                },
                { 
                    id: '2', 
                    company: 'Collabera', 
                    title: 'Backend Developer', 
                    workSummary: 'Deployed to GCash to do hmm stuff. Used java and spring. Created an automation system that delivers POID everyday from GCash to Globe. I used Spring Integration for this one.',
                    stay: 'Feb 2021 - June 2021.... yea only'
                }, 
                { 
                    id: '3', 
                    company: 'Sandstone Technology', 
                    title: 'Associate Developer', 
                    workSummary: 'Oh yea, we were doing some lending app stuff.. using Java. I also used JBoss Seam, Spring, Angular. Also Hibernate, JDBC, SQL, you know database stuff.' ,
                    stay: 'Feb 2019 - Feb 2021'
                }  
            ]
        }
    }
}
</script>