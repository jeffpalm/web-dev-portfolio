<script>
  import LinkedInIcon from "./icons/LinkedInIcon.svelte";
  import GitHubIcon from "./icons/GitHubIcon.svelte";
  import EmailIcon from "./icons/EmailIcon.svelte";
  import ResumeIcon from "./icons/ResumeIcon.svelte";
  import { fly } from "svelte/transition";
</script>

<div class="sidebar-root" in:fly={{ x: -64, delay: 800 }} out:fly={{ x: -64 }}>
  <a
    class="icon-button"
    type="button"
    href="https://www.linkedin.com/in/jeffpalmdev/"
    target="_blank"
    rel="noreferrer noopener"
  >
    <LinkedInIcon />
  </a>
  <a
    class="icon-button"
    type="button"
    href="https://github.com/jeffpalm"
    target="_blank"
    rel="noreferrer noopener"
  >
    <GitHubIcon />
  </a>
  <a
    class="icon-button"
    type="button"
    href="https://jeffpalm.dev/resume"
    target="_blank"
    rel="noreferrer noopener"
  >
    <ResumeIcon />
  </a>
  <a
    class="icon-button"
    type="button"
    href="mailto:jeff@jeffpalm.dev"
    target="_blank"
    rel="noreferrer noopener"
  >
    <EmailIcon />
  </a>
</div>

<style>
  .sidebar-root {
    position: fixed;
    width: 60px;
    height: 240px;
    left: 0;
    top: calc(50vh - 120px + 32px);
    z-index: 100;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--bg-color);
  }

  .icon-button {
    color: #fff;
    background: none;
    border: none;
    outline: none;
    width: 36px;
  }
</style>
