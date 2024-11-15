<script lang="ts">
  import FullPage from "../components/FullPage.svelte";
  import TypingAnimation from "../components/TypingAnimation.svelte";
  import Typography from "../components/Typography.svelte";

  type Props = {
    hue: number;
  };

  let { hue }: Props = $props();
</script>

<FullPage id="about" altBg>
  <Typography type="h1">Hiiiii!</Typography>
  <img src="/palmy_wave.gif" alt="Jeff Palmer waving" />
  <Typography type="h2">
    My name is{" "}
    <TypingAnimation
      --color={`hsl(${hue}, 50%, 50%)`}
      strings={[
        "Jeffrey",
        "Jeff",
        "Jeff Palm",
        "Jeff Palmer",
        "Palmer",
        "Palmytree",
        "Palmy Palm",
        "El Jefe",
      ]}
    />
  </Typography>
  <Typography type="h4">
    I am an experienced Software Engineer with a passion for people, technology,
    and building cool things fueled by a life long curiosity.
  </Typography>
  <Typography>
    In March 2020, I was laid off by my employer of 5 years due to the COVID-19
    pandemic. It was a painful blow, but I decided to take the opportunity to
    buckle down and pursue a career in Web Development because I had built
    multiple websites at my previous job using GUI tools and figuring things out
    as I went, but I never really learned how to code. So, I spent all my time
    since March learning everything I can about becoming a Developer. I started
    with Codecademy&#39;s self-guided lessons then enrolled and completed
    DevMountain&#39;s Full Stack Web Development Bootcamp. Now, I&#39;m on the
    hunt to find more than just a paycheck.
  </Typography>
</FullPage>

<style>
  * {
    margin-bottom: 1rem;
  }

  img {
    max-width: 700px;
  }
</style>
