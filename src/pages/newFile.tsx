import Layout from "../layouts/Layout.astro";
import Video from "../components/Video.astro";
import Intro from "../components/Intro.astro";
import Bento from "../components/Bento.astro";
import PreFooter from "../components/PreFooter.astro";
import Footer from "../components/Footer.astro";

<Fragment>
  <Layout
    title="Premios ESLAND 2024 - Celebrando lo mejor del streaming y los creadores de contenido"
    description="Descubre a los mejores creadores de contenido de España y Latinoamérica. ¡Vota por tus favoritos! Celebra la innovación y el talento de Twitch, Youtube y más"
  >
    <Video />
    <main>
      <Intro />
      <Bento />
      <PreFooter />
    </main>
    <Footer />
  </Layout>
</Fragment>;
