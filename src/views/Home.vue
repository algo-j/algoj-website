<template>
  <div class="home">
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
  </div>
</template>

<script>
import Landing from '@/components/Home/Landing.vue';
import TextBloc from '@/components/Home/TextBloc.vue';
import Button from '@/components/Elements/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
    TextBloc,
    Landing,
  },
  data: () => ({
    constructions: [
      {
        title: 'Le journalisme à la rencontre des algorithmes.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
          + 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.',
      },
      {
        title: 'Consultez les articles de recherche AlgoJ.',
        description: 'Grâce à un système d’ajout d’amis simple et complet gardez le contact avec vos nouvelles connaissances ou celles de plus longues dates. Échanger avec eux via messages privés ou via le canal de discussion général. Ainsi, dans ce dernier, définissez qui peut voir vos messages, tout le monde, seulement vos amis, ou uniquement un utilisateur en particulier.',
      },
    ],
    button: [
      {
        textButton: 'Découvrir les rapports détaillés',
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

  .body {
    display: flex;
    flex-direction: column;
    gap: 15rem;

    .cosmoscope {
      margin-top: 10rem;
    }

    .ressources {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-bottom: 15rem;
    }
  }
}

/* Responsive Design */

@media only screen and (max-device-width : 730px) {

  .home {
    .navbar {
      top: 1.5rem;
    }
  }

}

</style>
