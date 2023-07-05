<template>
  <div class="home">
    <Navbar/>
    <Landing/>
    <div class="body">
      <div class="cosmoscope">
        <TextBloc
          :title="constructions[0].title"
          :description="constructions[0].description"/>
      </div>
      <div class="ressources">
        <TextBloc
          :title="constructions[1].title"
          :description="constructions[1].description"/>
        <Button
          :textButton="button[0].textButton"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Home/Landing.vue';
import TextBloc from '@/components/Home/TextBloc.vue';
import Button from '@/components/Elements/Button.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    Button,
    TextBloc,
    Landing,
    Navbar,
  },
  data: () => ({
    constructions: [
      {
        title: 'Un seul canal de discussion pour tous les utilisateurs.',
        description: 'Un principe simple vous permet de vous intégrer rapidement dans une large communauté. En effet en vous connectant sur WWAH vous êtes propulsé à travers un unique canal de discussion, vous permettant d’échanger avec de nombreuses personnes venues d’envergures différentes. Pas de séparation, pas de barrière, WWAH est un immense bac à sable ou vous pouvez venir construire ce qui vous en dit.',
      },
      {
        title: 'Ajoutez vos amis et choisissez qui peut voir vos messages.',
        description: 'Grâce à un système d’ajout d’amis simple et complet gardez le contact avec vos nouvelles connaissances ou celles de plus longues dates. Échanger avec eux via messages privés ou via le canal de discussion général. Ainsi, dans ce dernier, définissez qui peut voir vos messages, tout le monde, seulement vos amis, ou uniquement un utilisateur en particulier.',
      },
    ],
    button: [
      {
        textButton: 'Découvrir le rapport détaillé',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    position: fixed;
    top: 3rem;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 15rem;

    .ressources {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-bottom: 15rem;
    }
  }
}

</style>
